
<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$nombreTipo= $_GET["nomTipo"];
$colorEvento= $_GET["colorTipo"];

$sql = "INSERT INTO tipo_evento (Nombre_Evento, Color_Tipo_Evento) VALUES ('$nombreTipo','$colorEvento')";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());


$estado["mensaje"]= "Nuevo Tipo De Evento Creada";
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>