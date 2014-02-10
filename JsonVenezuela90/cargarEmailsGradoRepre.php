<?php
// conexion bd 
include("conex.php");

header('Content-type: application/json');

$grado = $_GET["year"];

$sql2 = "SELECT F.Id_Representante, U.Email FROM usuario U INNER JOIN representante R ON U.Id_Usuario = R.Id_Usuario_Representante INNER JOIN representante_estudiante  F ON R.Id_Representante = F.Id_Representante INNER JOIN estudiante E ON F.Id_Estudiante = E.Id_Estudiante WHERE E.Id_Grado = '$grado'";

$result = mysql_query($sql2) or die("Error de Consulta2". mysql_error());
$i =0;

$cantidad = mysql_num_rows($result);

while($row2 = mysql_fetch_row($result)){
	$estado[$i]["idAlum"]= $row2[0];
	$estado[$i]["mailG"]= $row2[1];
	$i++;	
}

if($cantidad == 0){
	$estado["num"] = 0;
	$estado["mensaje"]= "No Emails";
}
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';

?>