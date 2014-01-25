
<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$idTipoEvento= $_GET["id"];
$descri= $_GET["des"];
$fec= $_GET["fe"];

$sql = "INSERT INTO calendario_escolar (Id_Tipo_Evento, Descripcion, Fecha) VALUES ('$idTipoEvento','$descri', '$fec')";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());


$estado["mensaje"]= "Nuevo Evento Creado";
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>