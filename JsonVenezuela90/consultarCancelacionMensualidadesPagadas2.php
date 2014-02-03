<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$id= $_GET["idCan"];

$sql = "Select mesPagado FROM mensualidad_pagada WHERE id_RegistroCanM='$id' ORDER BY id_MP DESC LIMIT 1" ;

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
		
	$estado[$i]["nombreMes"]= $row[0];
	$i++;	
}
//Convertir los resultados a formato json

$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
//$sql= "SELECT Cedula,Nombre,Apellido,Correo FROM usuario WHERE Cedula='$usr'";
?>