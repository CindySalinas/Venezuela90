<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$sql = "SELECT id_solicitud,tipo_solicitud,fecha_solicitud,fechaRespuesta,respuesta from solicitudes";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
		
	$estado[$i]["numSoli"]= $row[0];
	$estado[$i]["tipoSolic"]= $row[1];
	$estado[$i]["fechaSoli"]= $row[2];
	$estado[$i]["resFechaSoli"]= $row[3];
	$estado[$i]["respSoli"]= $row[4];
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