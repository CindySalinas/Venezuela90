<?php
// conexion bd 
include("conex.php");

header('Content-type: application/json');

$ced = $_GET["cedula"];
$idAl;

$sql1 = "SELECT E.Id_Estudiante, E.Id_Usuario FROM estudiante E INNER JOIN Usuario U ON U.Id_Usuario = E.Id_Usuario WHERE U.Cedula = '$ced'";
$result = mysql_query($sql1) or die("Error de Consulta". mysql_error());


while($row = mysql_fetch_row($result)){
	 $idAl = $row[0];

}

$sql2 = "SELECT F.Id_Representante,U.Email FROM usuario U INNER JOIN representante R ON U.Id_Usuario = R.Id_Usuario_Representante  INNER JOIN representante_estudiante  F ON R.Id_Representante = F.Id_Representante WHERE F.Id_Estudiante = '$idAl'";

$result = mysql_query($sql2) or die("Error de Consulta2". mysql_error());
$i =0;

$cantidad = mysql_num_rows($result);

while($row2 = mysql_fetch_row($result)){
	$estado[$i]["idRepre"]= $row2[0];
	$estado[$i]["mailP"]= $row2[1];
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