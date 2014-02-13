<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$galleta = $_COOKIE;
	

foreach ( $galleta as $key => $value) {
	echo $key. " ". $value;
	//$estado[$key]["Nombre"] = $value;
}
//$estado["Lista Cookie"]= $cooks;
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>