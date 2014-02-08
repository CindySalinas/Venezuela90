<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$app = $_GET["ap"];
$nombre = $_GET["nom"];
$dir = $_GET["lug2"];
$mail = $_GET["mail"];
$tel = $_GET["cell"];
$ced = $_COOKIE["cedulaAdmin"];

$sql = "UPDATE usuario SET Apellido = '$app', Nombre ='$nombre', Direccion='$dir', Email='$mail',  Telefono = '$tel' WHERE Cedula = $ced";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
/*
//echo mysql_affected_rows();
if(mysql_affected_rows() > 0){
	$estado["num"] = 1;
	$estado["mensaje"]= "Alumno Actualizado";
}
else{
	$estado["num"] = 0;
	$estado["mensaje"] = "No se puede Actualizar/ Contacte Serviceio Tecnico";
}*/
$estado["mensaje"]= "Alumno Actualizado";
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>
