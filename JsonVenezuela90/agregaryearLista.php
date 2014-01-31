<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$years = $_GET["year"];
$listaId = $_GET["id"];
echo $listaId;
$sql = "UPDATE  listas SET id_grado='$years' where id_lista ='$listaId'";


$result = mysql_query($sql) or die("Error de Consulta". mysql_error());


$estado["mensaje"]= "Alumno Actualizado";
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>