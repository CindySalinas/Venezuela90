
<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$nomUsuario= $_GET["user"];
$nombreTema= $_GET["nombre"];
$mensajeTema= $_GET["tema"];
$fecha= $_GET["fecha"];
$hora= $_GET["hora"];

$sql = "INSERT INTO foros (Id_Usuario,Nombre_Tema,Tema,Fecha,Hora) VALUES ('$nomUsuario','$nombreTema','$mensajeTema','$fecha','$hora')";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());


$estado["mensaje"]= "Nuevo Foro Creado";
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>