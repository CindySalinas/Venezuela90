
<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$cedula= $_GET["cedDocente"];

$sql = "SELECT * FROM docente where Cedula='$cedula'";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
		
	$i++;	
}

$estado["num"] = $i;

//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>