<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$idGrado= $_GET["grado"];

$sql = "SELECT E.Id_Estudiante, U.Cedula FROM estudiante E INNER JOIN usuario U ON E.Id_Usuario=U.Id_Usuario WHERE E.Id_Grado='$idGrado'";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
	$estado[$i]["idEstudiante"] = $row[0];	
	$estado[$i]["cedula"] = $row[1];	
	$i++;	
}
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>