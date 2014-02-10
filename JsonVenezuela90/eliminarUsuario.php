<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$ced = $_GET["cedula"];

$sql = "SELECT U.Id_Usuario, U.Cedula,U.Id_Rol_Usuario FROM usuario U WHERE U.Cedula = $ced";
$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$idUsuari;
$idRol;
$i =0;
$cantidad = mysql_num_rows($result);
$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
	$idUsuari= $row[0];
	$idRol= $row[2];
	$i++;	
}
if($idRol == 2){
	$sql2 = "DELETE FROM usuario WHERE Cedula ='$ced'";
	$result = mysql_query($sql2) or die("Error de Consulta2 ". mysql_error());

	$sql3 = "DELETE FROM docente WHERE Id_Usuario_Docente = '$idUsuari'";
	$result = mysql_query($sql3) or die("Error de Consulta3 ". mysql_error());
}
else
if($idRol == 3){
	$sql4 = "DELETE FROM usuario WHERE Cedula ='$ced'";
	$result = mysql_query($sql4) or die("Error de Consulta2 ". mysql_error());

	$sql5 = "DELETE FROM estudiante WHERE Id_Usuario = '$idUsuari'";
	$result = mysql_query($sql5) or die("Error de Consulta5 ". mysql_error());
}else{
	$sql6 = "DELETE FROM usuario WHERE Cedula ='$ced'";
	$result = mysql_query($sql6) or die("Error de Consulta6 ". mysql_error());
}
/*
$sql = "DELETE FROM Usuario WHERE Cedula ='$ced'";
$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
*/

$estado["mensaje"]= "Usuario Eliminado";
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>