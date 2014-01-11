
<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$tituloNot= $_GET["titulo"];
$menNot= $_GET["mensaje"];
$idNot= $_GET["id"];

$sql = "UPDATE noticias SET Titulo_Noticia='$tituloNot', Noticia='$menNot' WHERE Id_Noticia='$idNot'";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());


$estado["mensaje"]= "Se realizo con exito los cambios";
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>