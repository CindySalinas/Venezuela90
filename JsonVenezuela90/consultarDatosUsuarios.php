<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$idUsuario= $_GET["id"];

$sql = "Select Nombre, Apellido, Cedula FROM usuario WHERE Id_Usuario='$idUsuario'";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
		
	$estado[$i]["nombre"]= $row[0];
	$estado[$i]["apellido"]= $row[1];
	$estado[$i]["cedula"]= $row[2];
	$i++;	
}
//Convertir los resultados a formato json

$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
//$sql= "SELECT Cedula,Nombre,Apellido,Correo FROM usuario WHERE Cedula='$usr'";
?>