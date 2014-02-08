
<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$idDocente= $_GET["docente"];
$idYear= $_GET["year"];
$idMateria= $_GET["materia"];
$idHorario= $_GET["horario"];
$idGrado= $_GET["grado"];
$idDia= $_GET["dia"];

$sql = "INSERT INTO horario_materia (Id_Materia,Id_Docente,Id_Horario, Id_Year_Escolar_MateriaDocente,Id_Grado,Id_Dia_Horario_Materia) VALUES ('$idMateria','$idDocente','$idHorario','$idYear','$idGrado','$idDia')";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());


$estado["mensaje"]= "Horario Creado";
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>