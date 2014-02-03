<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$idUsuario= $_GET["idUsuario"];
$nomRecibo= $_GET["nombreRecibidoDe"];
$cantidad= $_GET["cantidadTexto"];
$fecha= $_GET["fec"];
$numeroRecibo= $_GET["numRecibo"];
$montoBs= $_GET["montoBss"];
$conceptoDe= $_GET["concepto"];
$year= $_GET["year"];

$meses = json_decode($_GET['mes'], true);
$cantidadMeses= $_GET["cant"];

$sql = "INSERT INTO cancelacion_mensualidades (numero_factura, id_year_escolar, monto_Bs,monto_txt,nombre_pago,concepto_pago,fecha,id_usuario_cancelacion_mensualidades) VALUES('$numeroRecibo', '$year','$montoBs','$cantidad','$nomRecibo','$conceptoDe','$fecha','$idUsuario')";
$result = mysql_query($sql) or die("Error de Consulta". mysql_error());

if(mysql_affected_rows() !=0){
	$estado["con"]=1;
	$estado["mensaje"] = "Pago efectuado con Exito";

	$sql2 = "SELECT id_registroCanM FROM cancelacion_mensualidades where numero_factura='$numeroRecibo'";
	$result2 = mysql_query($sql2) or die("Error de Consulta". mysql_error());
	$i2=0;
	while($row = mysql_fetch_row($result2))
	{	
		$id=$row[0];
		for ( $x = 0 ; $x < $cantidadMeses ; $x ++) 
		{
			$nombre=$meses[$x];
			$sql3 = "INSERT INTO mensualidad_pagada (mesPagado, id_registroCanM) VALUES('$nombre','$id')";
				
			$result3 = mysql_query($sql3) or die("Error de Consulta". mysql_error());
			if(mysql_affected_rows() !=0){
				$estado["con2"]=1;
				$estado["mensaje2"] = "Ingreso Exito";
			}
			else
			{
				$estado["con2"]=0;
				$estado["mensaje2"] = "Error";
			}
		}	
		$i2++;
	}

}
else{
	$estado["con"]=0;
	$estado["mensaje"] = "Error en generar Factura";
}
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>