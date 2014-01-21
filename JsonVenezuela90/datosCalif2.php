<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$cedProf = $_GET["ced"];

$sql2 = "SELECT U.nombre, U.apellido FROM Usuario U WHERE U.cedula = '$cedProf'";
$result2 = mysql_query($sql2) or die("Error de Consulta". mysql_error());
$cantidad = mysql_num_rows($result2);	
while ($row2 = mysql_fetch_row($result2)) {
		$estado["profNom"] = $row2[0]." ".$row2[1];
}

if($cantidad == 0){
	$estado["num"] = 0;
	$estado["mensaje"]= "No existen Alumnos Para esta Clase";
}
//Convertir los resultados a formato json

$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';

?>