<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');


$sql = "SELECT F.Id_Representante, R.Rol_Paternidad, U.Apellido, U.Nombre, U.Cedula, U.Email, U.Telefono FROM usuario U INNER JOIN representante R ON U.Id_Usuario = R.Id_Usuario_Representante INNER JOIN representante_estudiante F ON R.Id_Representante = F.Id_Representante WHERE F.Id_Estudiante=1";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
	$estado[$i]["idHorarioMateria"] = $row[0];	
	$estado[$i]["idMateria"] = $row[1];	
	$estado[$i]["idDocente"] = $row[2];	
	$estado[$i]["idHorario"] = $row[3];	
	$estado[$i]["idYear"] = $row[4];	
	$estado[$i]["idGrado"] = $row[5];	
	$estado[$i]["idDia"] = $row[6];	
	$i++;	
}

//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>