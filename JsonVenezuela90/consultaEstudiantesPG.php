<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$idHM= $_GET["horarioMateria"];
$idL= $_GET["lapso"];

$sql = "SELECT U.Cedula, D.Id_Calificacion, D.Porcentaje, D.Puntos_Obtenidos, D.Descripcion FROM estudiante E INNER JOIN usuario U ON E.Id_Usuario=U.Id_Usuario INNER JOIN estudiante_materia_docente_nota D ON E.Id_Estudiante=D.Id_Estudiante WHERE D.Id_Horario_Materia='$idHM' AND D.Id_Lapso='$idL'";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
	$estado[$i]["cedula"] = $row[0];	
	$estado[$i]["nota"] = $row[1];	
	$estado[$i]["porcentaje"] = $row[2];	
	$estado[$i]["puntos"] = $row[3];	
	$estado[$i]["descripcion"] = $row[4];	
	$i++;	
}
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>