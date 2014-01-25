
<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$idTipoEvento= $_GET["id"];
$descri= $_GET["des"];
$fec1= $_GET["fe1"];
$fec2= $_GET["fe2"];

$sql = "UPDATE calendario_evento_grado SET Id_Grado_Calendario_Evento = '$idTipoEvento', Descripcion = '$descri', Fecha = '$fec2' where Fecha = '$fec1'";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());


$estado["mensaje"]= "Modificado";
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>