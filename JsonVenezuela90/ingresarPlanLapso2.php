<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

/*$sql = "INSERT INTO actividades_planificacion_por_lapso (Id_Planificacion_Por_Lapso, Objetivos_Especificos, Contenido, Estrategias_Metodologicas, Recurso, Ponderacion, Tecnica_Evaluacion, Fecha) VALUES ('$idPlanificacion','$ob','$con','$est','$rec','$pon','$tec','$fec')";*/

$idHorarioDocenteMateria= $_GET["idHorarioDocenteMateria"];
$idMencion= $_GET["mencion"];
$idLapso= $_GET["lapso"];
$idYear= $_GET["yearEscolar"];
$ob= $_GET["objetivos"];
$con= $_GET["contenido"];
$est= $_GET["estrategias"];
$rec= $_GET["recursos"];
$tec= $_GET["tecnicas"];
$pon= $_GET["ponderacion"];
$fec= $_GET["fecha"];

$sql = "INSERT INTO planificacion_por_lapso (Id_Materia_Docente, Id_Lapso, Id_Year, Mencion) VALUES ('$idHorarioDocenteMateria','$idLapso','$idYear','$idMencion')";
$result = mysql_query($sql) or die("Error de Consulta". mysql_error());

$sql2 = "SELECT Id_Planificacion_Por_Lapso FROM planificacion_por_lapso where Id_Materia_Docente='$idHorarioDocenteMateria' AND Id_Lapso='$idLapso' AND Id_Year='$idYear' AND Mencion='$idMencion'";
$result2 = mysql_query($sql2) or die("Error de Consulta". mysql_error());

$records2 = array();
$i =0;

$cantidad2 = mysql_num_rows($result2);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result2))
{
	$idPlan = $row[0];

	$sql3 = "INSERT INTO actividades_planificacion_por_lapso (Id_Planificacion_Por_Lapso, Objetivos_Especificos, Contenido, Estrategias_Metodologicas, Recurso, Ponderacion, Tecnica_Evaluacion, Fecha) VALUES ('$idPlan','$ob','$con','$est','$rec','$pon','$tec','$fec')";
	$result3 = mysql_query($sql3) or die("Error de Consulta". mysql_error());

	$i++;	
}

$estado["num"] = $i;

//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>