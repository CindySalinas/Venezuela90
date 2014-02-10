<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$idAula= $_GET["aula"];
$idYear= $_GET["year"];

$sql = "SELECT * FROM horario_salones where Id_Salon='$idAula' AND Id_Year='$idYear'";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
	$estado[$i]["idHorarioSalones"] = $row[0];	
	$estado[$i]["idHorario"] = $row[1];	
	$estado[$i]["idSalon"] = $row[2];	
	$estado[$i]["idAsignatura"] = $row[3];	
	$estado[$i]["idYear"] = $row[4];	
	$estado[$i]["descripcion"] = $row[5];	
	$estado[$i]["idDia"] = $row[6];	
	$i++;	
}

//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>