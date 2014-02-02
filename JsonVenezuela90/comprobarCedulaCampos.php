<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$cedula= $_GET["cedula"];

$sql = "SELECT * FROM usuario where Cedula='$cedula'";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
	$estado[$i]["idUsuario"] = $row[0];	
	$estado[$i]["nombre"] = $row[1];	
	$estado[$i]["apellido"] = $row[2];	
	$estado[$i]["cedula"] = $row[3];	
	$estado[$i]["email"] = $row[4];	
	$estado[$i]["password"] = $row[5];	
	$estado[$i]["idgenero"] = $row[6];	
	$estado[$i]["estadoCivil"] = $row[7];	
	$estado[$i]["nacionalidad"] = $row[8];	
	$estado[$i]["telefono"] = $row[9];	
	$estado[$i]["direccion"] = $row[10];	
	$estado[$i]["rol"] = $row[11];	
	$i++;	
}

//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>