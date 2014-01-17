<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$val1= $_GET["val1"];
$val2= $_GET["val2"];
$val3= $_GET["val3"];
$val4= $_GET["val4"];
$val5= $_GET["val5"];
$val6= $_GET["val6"];

//$sql = "INSERT INTO cancelacion_mensualidades (cedula_estudiante, monto_Bs, monto_texto, pago_nombre, pago_concepto, fecha) VALUES ('$val2','$val1','$val4','$val3','$val5','$val6')";

$sql = "INSERT INTO cancelacion_mensualidades (monto_Bs,monto_txt,nombre_pago,concepto_pago,fecha,cedula) VALUES('$val1','$val4','$val3','$val5','$val6','$val2')";
$result = mysql_query($sql) or die("Error de Consulta". mysql_error());

if(mysql_affected_rows() !=0){
	$estado["con"]=1;
	$estado["mensaje"] = "Pago efectuado con Exito";
	
	/*$sql2 = "UPDATE usuario U SET id_pago = (SELECT id_pago FROM pago WHERE cedula_estudiante = U.Cedula)";
$result2 = mysql_query($sql2) or die("Error de Consulta". mysql_error());*/
}else{
	$estado["con"]=0;
	$estado["mensaje"] = "Error en generar Factura";
}
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>