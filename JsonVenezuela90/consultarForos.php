<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$sql = "Select F.Id_Foro, F.Nombre_Tema, F.Tema, F.Fecha, U.Nombre, U.Apellido, U.Cedula FROM foros F INNER JOIN usuario U ON F.Id_Usuario = U.Cedula";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){

	$idfo=$row[0];

	$sql2 = "Select * from respuestasforos WHERE Id_Foro='$idfo'";

	$result2 = mysql_query($sql2) or die("Error de Consulta". mysql_error());
	
	$cantidad2 = mysql_num_rows($result2);
	

	$estado[$i]["idForo"]= $row[0];
	$estado[$i]["nombreTema"]= $row[1];
	$estado[$i]["tema"]= $row[2];
	$estado[$i]["fecha"]= $row[3];
	$estado[$i]["nombre"]= $row[4];
	$estado[$i]["apellido"]= $row[5];
	$estado[$i]["cedula"]= $row[6];
	$estado[$i]["resp"]= $cantidad2;
	$i++;	
}
if($cantidad == 0){
	$estado["num"] = 0;
	$estado["mensaje"]= "No Existe Foro Creado";
}
//Convertir los resultados a formato json

$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
//$sql= "SELECT Cedula,Nombre,Apellido,Correo FROM usuario WHERE Cedula='$usr'";
?>