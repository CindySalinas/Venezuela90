<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$idPlanificacion= $_GET["planificacion"];
$ob= $_GET["objetivos"];
$con= $_GET["contenido"];
$est= $_GET["estrategias"];
$rec= $_GET["recursos"];
$tec= $_GET["tecnicas"];
$pon= $_GET["ponderacion"];
$fec= $_GET["fecha"];

$sql = "INSERT INTO actividades_planificacion_por_lapso (Id_Planificacion_Por_Lapso, Objetivos_Especificos, Contenido, Estrategias_Metodologicas, Recurso, Ponderacion, Tecnica_Evaluacion, Fecha) VALUES ('$idPlanificacion','$ob','$con','$est','$rec','$pon','$tec','$fec')";
$result = mysql_query($sql) or die("Error de Consulta". mysql_error());

$estado["mensaje"]= "Actividad Agregada";
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>