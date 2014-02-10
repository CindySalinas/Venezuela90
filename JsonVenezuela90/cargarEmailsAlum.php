<?php
// conexion bd 
include("conex.php");

header('Content-type: application/json');

$ced = $_GET["cedula"];

$sql2 = "SELECT U.Id_Usuario,U.Email FROM usuario U INNER JOIN estudiante E ON U.Id_Usuario = E.Id_Usuario WHERE U.Cedula ='$ced'";

$result = mysql_query($sql2) or die("Error de Consulta2". mysql_error());
$i =0;

$cantidad = mysql_num_rows($result);

while($row2 = mysql_fetch_row($result)){
	$estado[$i]["idRepre"]= $row2[0];
	$estado[$i]["mailP"]= $row2[1];
	$i++;	
}

if($cantidad == 0){
	$estado["num"] = 0;
	$estado["mensaje"]= "No Emails";
}
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';

?>