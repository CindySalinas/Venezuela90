
<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$resp= $_GET["resp"];
$fechaResp= $_GET["fecha"];
$numSoli= $_GET["id"];
$est= $_GET["est"];

$sql = "UPDATE  solicitudes SET fechaRespuesta='$fechaResp', respuesta= '$resp', estado='$est' where id_solicitud ='$numSoli'";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());


$estado["mensaje"]= "Solicitud Respondida";
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>