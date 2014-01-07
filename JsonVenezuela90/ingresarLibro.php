<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$val1= $_GET["val1"];
$val2= $_GET["val2"];
$val3= $_GET["val3"];
$val4= $_GET["val4"];
$val5= $_GET["val5"];
$val6= $_GET["val6"];
$val7= $_GET["val7"];
$arr= $val1."_libro";

$sql = "INSERT INTO libros (nombre_libro,autor_libro,materia_libro,year_libro,edit_libro,edicion_libro,cantidad_libro) VALUES ('$val1','$val2','$val3','$val4','$val5','$val6','$val7')";
$result = mysql_query($sql) or die("Error de Consulta". mysql_error());


$estado["mensaje"]= "El libro se ha guardado con exito";
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>