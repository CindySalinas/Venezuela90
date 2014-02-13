<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$idMateria= $_GET["materia"];
$idGrado= $_GET["grado"];

$sql = "SELECT H.Id_Horario_Materia FROM horario_materia H INNER JOIN year_actual Y On H.Id_Year_Escolar_MateriaDocente = Y.Id_Year_Escolar where Id_Materia='$idMateria' AND Id_Grado='$idGrado' AND Y.Id_Year_Actual='1'";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
	$estado[$i]["idHorarioMateria"] = $row[0];		
	$i++;	
}

//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>