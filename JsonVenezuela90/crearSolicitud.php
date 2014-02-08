
<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$id= $_GET["tipo"];
$fecha = $_GET["fecha"];
$msj = $_GET["coments"];
//$nom = $_GET["nom"];
$edo = $_GET["edo"];
$ced = $_COOKIE["cedulaProf"];
$sql = "INSERT INTO solicitudes (id_tipo_solicitud,id_usuarioCedula,fecha_solicitud,comentarios,estado) VALUES ('$id','$ced', '$fecha','$msj','$edo')";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());


$estado["mensaje"]= "Nueva Solicitud Creada";
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>