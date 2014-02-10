
<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$idHorario= $_GET["horario"];
$idSalon= $_GET["salon"];
$idAsignatura= $_GET["materia"];
$idYear= $_GET["year"];
$idDia= $_GET["dia"];

$sql = "INSERT INTO horario_salones (Id_Horario,Id_Salon,Id_Asignatura, Id_Year, Id_Dia) VALUES ('$idHorario','$idSalon','$idAsignatura','$idYear','$idDia')";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());


$estado["mensaje"]= "Horario Creado";
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>