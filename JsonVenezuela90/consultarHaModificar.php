<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$idSalon= $_GET["aula"];
$idYear= $_GET["year"];

$sql = "SELECT Id_Horario_Salones, Id_Asignatura, Id_Horario, Id_Dia FROM horario_salones where Id_Salon='$idSalon' AND Id_Year='$idYear'";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
	$estado[$i]["idHorarioSalon"] = $row[0];	
	$estado[$i]["idMateria"] = $row[1];		
	$estado[$i]["idHorario"] = $row[2];			
	$estado[$i]["idDia"] = $row[3];		
	$i++;	
}

//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>