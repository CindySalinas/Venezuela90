
<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$fech= $_GET["fe"];
$descri= $_GET["des"];
$idgrado= $_GET["idg"];

$sql = "INSERT INTO calendario_evento_grado (Id_Grado_Calendario_Evento, Descripcion, Fecha) VALUES ('$idgrado','$descri', '$fech')";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());


$estado["mensaje"]= "Nueva Actividad Creada";
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>