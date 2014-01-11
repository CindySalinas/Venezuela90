
<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$nomUsuario= $_GET["user"];
$tituloNoticia= $_GET["titulo"];
$contNoticia= $_GET["noticia"];
$imgNoticia= $_GET["imagen"];
$fecha= $_GET["fecha"];
$hora= $_GET["hora"];

$sql = "INSERT INTO noticias (Id_Usuario_Creador,Titulo_Noticia,Noticia, Imagen_Noticia,Fecha_Noticia,Hora_Noticia) VALUES ('$nomUsuario','$tituloNoticia','$contNoticia','$imgNoticia','$fecha','$hora')";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());


$estado["mensaje"]= "Nueva Noticia Creada";
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>