<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$nombre= $_GET["nom"];

$sql = "Select Id_Tipo_Evento FROM tipo_evento WHERE Nombre_Evento='$nombre'";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){

	$estado[$i]["idTipoEvento"]= $row[0];
	$i++;	
}

//Convertir los resultados a formato json

$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
//$sql= "SELECT Cedula,Nombre,Apellido,Correo FROM usuario WHERE Cedula='$usr'";
?>