
<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$idHA= $_GET["horarioAula"];
$idM= $_GET["materia"];

$sql = "UPDATE horario_salones SET Id_Asignatura='$idM' WHERE Id_Horario_Salones='$idHA'";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());


$estado["mensaje"]= "Modificado";
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>