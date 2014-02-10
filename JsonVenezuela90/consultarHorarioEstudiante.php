<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$idGrado= $_GET["grado"];

$sql = "SELECT M.Nombre_Materia, H.Id_Horario, H.Id_Dia_Horario_Materia FROM horario_materia H INNER JOIN materia M ON H.Id_Materia=M.Id_Materia INNER JOIN grado G ON H.Id_Grado=G.Id_Grado INNER JOIN year_actual Y ON H.Id_Year_Escolar_MateriaDocente=Y.Id_Year_Escolar where H.Id_Grado='$idGrado'";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
	$estado[$i]["nombreMateria"] = $row[0];	
	$estado[$i]["idHorario"] = $row[1];		
	$estado[$i]["idDia"] = $row[2];		
	$i++;	
}

//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>