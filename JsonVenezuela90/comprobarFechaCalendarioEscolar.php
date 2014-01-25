
<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$fech= $_GET["fe"];

$sql = "SELECT * FROM calendario_Escolar where Fecha='$fech'";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());

$records = array();
$i =0;

$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){	
	$estado["idCE"] = $row[0];	
	$estado["idTE"] = $row[1];	
	$estado["des"] = $row[2];	
	$estado["fe"] = $row[3];	
	$i++;	
}

$estado["num"] = $i;

//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>