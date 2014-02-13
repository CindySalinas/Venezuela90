<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$idEstudiante= $_GET["estudiante"];
$idHorarioMateria= $_GET["horarioMateria"];
$idLapso= $_GET["lapso"];

$sql = "SELECT Id_Calificacion, Porcentaje, Puntos_Obtenidos, Descripcion, Id_Estudiante_Materia_Docente_Nota, Id_Lapso FROM estudiante_materia_docente_nota WHERE Id_Estudiante='$idEstudiante' AND Id_Horario_Materia='$idHorarioMateria' AND Id_Lapso='$idLapso'";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
	$estado[$i]["calificacion"] = $row[0];	
	$estado[$i]["porcentaje"] = $row[1];	
	$estado[$i]["puntos"] = $row[2];	
	$estado[$i]["descipcion"] = $row[3];	
	$estado[$i]["idEMN"] = $row[4];	
	$estado[$i]["lapso"] = $row[5];	
	$i++;	
}
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>