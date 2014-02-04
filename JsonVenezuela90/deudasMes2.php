<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$cedula= $_GET["cedula"];

$sql = "Select M.mesPagado, U.Nombre, U.Apellido, U.Id_Usuario FROM mensualidad_pagada M INNER JOIN cancelacion_mensualidades C ON M.id_RegistroCanM=C.id_registroCanM INNER JOIN usuario U ON C.id_usuario_cancelacion_mensualidades = U.Id_Usuario WHERE U.Cedula='$cedula' ORDER BY M.id_MP DESC LIMIT 1" ;

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
		
	$estado[$i]["nombreMes"]= $row[0];
	$estado[$i]["nombre"]= $row[1];
	$estado[$i]["apellido"]= $row[2];
	$estado[$i]["idU"]= $row[3];
	$i++;	
}
//Convertir los resultados a formato json

$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
//$sql= "SELECT Cedula,Nombre,Apellido,Correo FROM usuario WHERE Cedula='$usr'";
?>