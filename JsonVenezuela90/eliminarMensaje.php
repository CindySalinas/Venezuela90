
<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$idMensaje= $_GET["idMen"];

$sql = "Delete from mensajes where Id_Mensaje='$idMensaje'";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());


$estado["mensaje"]= "Mensaje Eliminado";
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>