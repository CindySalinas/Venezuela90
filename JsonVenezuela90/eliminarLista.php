
<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$idLista= $_GET["idL"];

$sql = "DELETE FROM listas WHERE id_lista ='$idLista'";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());


$estado["mensaje"]= "Lista Eliminada";
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>