<?php 
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$ced = $_COOKIE["cedulaStudent"];
$sql = "SELECT S.id_solicitud,S.id_tipo_solicitud,T.tipo_solicitud,S.id_usuarioCedula,U.Nombre,U.Apellido,S.fecha_solicitud,S.fechaRespuesta,S.comentarios,S.respuesta,S.estado,U.Email FROM solicitudes S INNER JOIN tipo_solicitud T  ON T.id_tipo_solicitud = S.id_tipo_solicitud INNER JOIN usuario U ON U.Cedula = S.id_usuarioCedula WHERE U.Cedula = '$ced'";


//$sql = "SELECT id_solicitud,tipo_solicitud,fecha_solicitud,fechaRespuesta,respuesta from solicitudes";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());


$cantidad = mysql_num_rows($result);
$i =0;
while($row = mysql_fetch_array($result)){
	$estado[$i]["numSoli"]= $row[0];
	$estado[$i]["tipoSolic"]= $row[2];
	$estado[$i]["fechaSoli"]= $row[6];
	$estado[$i]["cedSoli"]=$row[3];
	$estado[$i]["nomSoli"]= $row[4]." ".$row[5];
	$estado[$i]["resFechaSoli"]= $row[7];
	$estado[$i]["estadoSoli"]= $row[10];
	$estado[$i]["mailSoli"]= $row[11];
	$estado[$i]["comentSoli"]=$row[8];
	$estado[$i]["respSoli"]=$row[9];
	$i++;	
}



$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'].'('.$estadoJson.');';
//$sql= "SELECT Cedula,Nombre,Apellido,Correo FROM usuario WHERE Cedula='$usr'";
?>