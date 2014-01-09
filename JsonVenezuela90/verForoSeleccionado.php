<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$foroSeleccionado= $_GET["fselect"];

$sql = "Select F.Id_Foro, F.Nombre_Tema, F.Tema, F.Fecha, F.Hora, U.Nombre, U.Apellido, U.Cedula FROM foros F INNER JOIN usuario U ON F.Id_Usuario = U.Cedula Where F.Id_Foro='$foroSeleccionado'";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
	$estado[$i]["idForo"]= $row[0];
	$estado[$i]["nombreTema"]= $row[1];
	$estado[$i]["tema"]= $row[2];
	$estado[$i]["fecha"]= $row[3];
	$estado[$i]["hora"]= $row[4];
	$estado[$i]["nombre"]= $row[5];
	$estado[$i]["apellido"]= $row[6];
	$estado[$i]["cedula"]= $row[7];
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