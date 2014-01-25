<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$sql = "Select C.Descripcion, C.Fecha, T.Nombre_Evento, T.Color_Tipo_Evento FROM calendario_escolar C INNER JOIN tipo_evento T ON C.Id_Tipo_Evento = T.Id_Tipo_Evento";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
		
	$estado[$i]["descripcion"]= $row[0];
	$estado[$i]["fecha"]= $row[1];
	$estado[$i]["nombreEvento"]= $row[2];
	$estado[$i]["colorEvento"]= $row[3];	
	$i++;	
}
//Convertir los resultados a formato json

$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
//$sql= "SELECT Cedula,Nombre,Apellido,Correo FROM usuario WHERE Cedula='$usr'";
?>