<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$id= $_GET["idUsuario"];

$sql = "Select id_registroCanM, fecha, numero_factura FROM cancelacion_mensualidades WHERE id_usuario_cancelacion_mensualidades='$id' AND concepto_Pago='Mensualidades'";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
		
	$estado[$i]["idd"]= $row[0];
	$estado[$i]["fechaa"]= $row[1];
	$estado[$i]["facturaa"]= $row[2];
	$i++;	
}
//Convertir los resultados a formato json

$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
//$sql= "SELECT Cedula,Nombre,Apellido,Correo FROM usuario WHERE Cedula='$usr'";
?>