<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$idDocente= $_GET["docente"];
$idYear= $_GET["year"];

$sql = "SELECT Id_Horario_Materia, Id_Materia, Id_Horario, Id_Grado, Id_Dia_Horario_Materia FROM horario_materia where Id_Docente='$idDocente' AND Id_Year_Escolar_MateriaDocente='$idYear'";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
	$estado[$i]["idHorarioMateria"] = $row[0];	
	$estado[$i]["idMateria"] = $row[1];		
	$estado[$i]["idHorario"] = $row[2];		
	$estado[$i]["idGrado"] = $row[3];		
	$estado[$i]["idDia"] = $row[4];		
	$i++;	
}

//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>