<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$idDocente= $_GET["docente"];
$idMateria= $_GET["materia"];
$idGrado= $_GET["grado"];
$idYear= $_GET["year"];
$idLapso= $_GET["lapso"];

$sql = "SELECT H.Id_Horario_Materia, P.Id_Planificacion_Por_Lapso FROM horario_materia H INNER JOIN planificacion_por_lapso P ON H.Id_Horario_Materia=P.Id_Materia_Docente  where H.Id_Docente='$idDocente' AND H.Id_Materia='$idMateria' AND H.Id_Grado='$idGrado' AND H.Id_Year_Escolar_MateriaDocente='$idYear' AND P.Id_Lapso='$idLapso' LIMIT 1";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
	$estado[$i]["idHorarioMateria"] = $row[0];		
	$estado[$i]["idPlanificacion"] = $row[1];		
	$i++;	
}

//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>