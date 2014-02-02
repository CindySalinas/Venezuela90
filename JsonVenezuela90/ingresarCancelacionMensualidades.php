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

$sql = "INSERT INTO cancelacion_mensualidades (numero_factura, monto_Bs,monto_txt,nombre_pago,concepto_pago,fecha,id_usuario_cancelacion_mensualidades) VALUES('$numeroRecibo','$montoBs','$cantidad','$nomRecibo','$conceptoDe','$fecha','$idUsuario')";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());

if(mysql_affected_rows() !=0){
	$estado["con"]=1;
	$estado["mensaje"] = "Pago efectuado con Exito";
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