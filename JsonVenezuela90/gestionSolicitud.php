<?php 
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

/*$tipo =$_GET["tipo"];
$datoB = $_GET["datoB"];

if($tipo == "tipoSolicitud"){
	$sql = "SELECT id_solicitud,tipo_solicitud,fecha_solicitud,fechaRespuesta,respuesta from solicitudes WHERE tipo_solicitud = '$datoB' ORDER BY id_solicitud DESC";
}else if($tipo == "fecha"){
	$sql = "SELECT id_solicitud,tipo_solicitud,fecha_solicitud,fechaRespuesta,respuesta from solicitudes WHERE fecha_solicitud = '$datoB'";
}
else if($tipo == "estado"){
	$sql = "SELECT id_solicitud,tipo_solicitud,fecha_solicitud,fechaRespuesta,respuesta from solicitudes WHERE respuesta = '$datoB'";
}
else if($tipo == "todo"){
	$sql = "SELECT id_solicitud,tipo_solicitud,fecha_solicitud,fechaRespuesta,respuesta  from solicitudes";
}
else{
	$estado["mensaje"]="No se puede realizar la busqueda";
}
*/
$sql = "SELECT id_solicitud,tipo_solicitud,fecha_solicitud,fechaRespuesta,respuesta from solicitudes";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());


$cantidad = mysql_num_rows($result);
$i =0;
while($row = mysql_fetch_array($result)){
	$estado[$i]["numSoli"]= $row[0];
	$estado[$i]["tipoSolic"]= $row[1];
	$estado[$i]["fechaSoli"]= $row[2];
	$estado[$i]["resFechaSoli"]= $row[3];
	$estado[$i]["respSoli"]= $row[4];
	$i++;	
}



$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'].'('.$estadoJson.');';
//$sql= "SELECT Cedula,Nombre,Apellido,Correo FROM usuario WHERE Cedula='$usr'";
?>