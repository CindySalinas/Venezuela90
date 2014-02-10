<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$idTipoLista= $_GET["id"];
$ced= $_GET["cedula"];

//$sql = "INSERT INTO listas (id_tipo_lista) VALUES ('$idTipoLista')";
$sql = "INSERT INTO  lista_estudiantes (id_lista,cedula) VALUES ('$idTipoLista','$ced')";
$result = mysql_query($sql) or die("Error de Consulta". mysql_error());

$estado["mensaje"]= "Alumno Agregado";
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>