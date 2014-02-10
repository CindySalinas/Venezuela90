
<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$idHM= $_GET["horarioMateria"];
$idM= $_GET["materia"];
$idG= $_GET["grado"];

$sql = "UPDATE horario_materia SET Id_Materia='$idM', Id_Grado='$idG' WHERE Id_Horario_Materia='$idHM'";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());


$estado["mensaje"]= "Modificado";
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>