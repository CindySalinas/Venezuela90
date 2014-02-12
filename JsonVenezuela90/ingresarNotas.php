
<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$idEstudiante= $_GET["estudiante"];
$idHorarioMateria= $_GET["horarioMateria"];
$idLapso= $_GET["lapso"];
$idCalificacion= $_GET["calificacion"];
$porcen= $_GET["porcentaje"];
$punto= $_GET["puntos"];
$descri= $_GET["descripcion"];

$sql2 = "INSERT INTO estudiante_materia_docente_nota (Id_Estudiante, Id_Horario_Materia, Id_Lapso, Id_Calificacion, Porcentaje, Puntos_Obtenidos, Descripcion) VALUES ('$idEstudiante','$idHorarioMateria', '$idLapso','$idCalificacion','$porcen', '$punto', '$descri')";

$result2 = mysql_query($sql2) or die("Error de Consulta". mysql_error());



$estado["mensaje"]= "Nueva Actividad Creada";
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>