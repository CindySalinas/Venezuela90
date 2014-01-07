<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$val1= $_GET["val1"];

$sql = "DELETE FROM libros WHERE id_Libro ='$val1'";
$result = mysql_query($sql) or die("Error de Consulta". mysql_error());


$estado["mensaje"]= "El libro se ha Eliminado con exito";
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>