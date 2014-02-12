<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$idDocente= $_GET["docente"];
$idGrado= $_GET["grado"];

$sql = "SELECT distinct H.Id_Materia, M.Nombre_Materia FROM horario_materia H INNER JOIN year_actual Y ON H.Id_Year_Escolar_MateriaDocente=Y.Id_Year_Escolar INNER JOIN materia M ON H.Id_Materia=M.Id_Materia where H.Id_Docente='$idDocente' AND H.Id_Grado='$idGrado'";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
	$estado[$i]["idMateria"] = $row[0];	
	$estado[$i]["nombreMateria"] = $row[1];	
	$i++;	
}
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>