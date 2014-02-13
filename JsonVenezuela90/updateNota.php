
<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$idCaliEstu= $_GET["idhora"];
$idLapso= $_GET["lapso"];
$idCalificacion= $_GET["calificacion"];
$porcen= $_GET["porcentaje"];
$punto= $_GET["puntos"];
$descri= $_GET["descripcion"];

$sql2 = "UPDATE estudiante_materia_docente_nota SET Id_Lapso='$idLapso', Id_Calificacion='$idCalificacion', Porcentaje='$porcen', Puntos_Obtenidos='$punto', Descripcion='$descri' WHERE Id_Estudiante_Materia_Docente_Nota='$idCaliEstu'";

$result2 = mysql_query($sql2) or die("Error de Consulta". mysql_error());



$estado["mensaje"]= "Nueva Actividad Creada";
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>