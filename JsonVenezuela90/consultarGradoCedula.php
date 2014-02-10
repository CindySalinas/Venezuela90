<?php
// conexion bd 
include("conex.php");
//formato JSON

$cedu= $_GET["cedula"];

$sql = "SELECT E.Id_Grado FROM estudiante E INNER JOIN usuario U ON E.Id_Usuario=U.Id_Usuario WHERE U.Cedula='$cedu'";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
		
	$estado[$i]["idGrado"]= $row[0];
	$i++;	
}
//Convertir los resultados a formato json

$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
//$sql= "SELECT Cedula,Nombre,Apellido,Correo FROM usuario WHERE Cedula='$usr'";
?>