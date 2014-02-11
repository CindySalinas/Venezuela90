<?php
// conexion bd 
include("conex.php");

header('Content-type: application/json');
$ced = $_GET["cedula"];
	
$sql = "SELECT U.Id_Foto_Perfil,F.Ruta_Foto_Perfil FROM Usuario U INNER JOIN foto_perfil_usuario F ON F.Id_Foto_Perfil = U.Id_Foto_Perfil WHERE U.Cedula = '$ced'";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);

$estado["num"]= $cantidad;
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
	$estado["ruta"] = $row[1];
	$i++;	
}
	

//Convertir los resultados a formato json

$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
//$sql= "SELECT Cedula,Nombre,Apellido,Correo FROM usuario WHERE Cedula='$usr'";
?>