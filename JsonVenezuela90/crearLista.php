<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$idLista= $_GET["idLista"];
$nomLista= $_GET["nomLista"];

//$sql = "INSERT INTO listas (id_tipo_lista) VALUES ('$idTipoLista')";
$sql = "INSERT INTO  listas (id_tipo_lista,nombre_Lista) VALUES ('$idLista','$nomLista')";
$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$utlID = mysql_insert_id();

$estado["mensaje"]= "Nueva lista creada";
$estado["ultimaID"]= $utlID;
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>