<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$cedula = $_GET["cedula"];
$idPadre;
$idEstu;
$sql = "SELECT U.Id_Usuario,R.Id_Representante,U.Cedula FROM usuario U INNER JOIN representante R ON U.Id_Usuario = R.Id_Usuario_Representante WHERE U.Cedula = '$cedula'";
$result = mysql_query($sql) or die("Error de Consulta 1". mysql_error());
//$records = array();
$i =0;


$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
	$estado["idPadres"] = $row[1];
}

//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>