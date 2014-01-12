
<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$cedUsuario= $_GET["userCedula"];
$correoDestinatario= $_GET["destCorreo"];
$asuntoMensaje= $_GET["asunto"];
$mensaje= $_GET["destMensaje"];
$fecha= $_GET["fecha"];
$hora= $_GET["hora"];

$sql2 = "Select Email FROM usuario Where Cedula='$cedUsuario'";

$result2 = mysql_query($sql2) or die("Error de Consulta". mysql_error());

$correo="";
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result2)){
	$correo= $row[0];
}

$sql = "INSERT INTO mensajes (Correo_Remitente,Correo_Destinatario,Asunto_Mensaje, Mensaje,Fecha,Hora, Favorito, Leido) VALUES ('$correo','$correoDestinatario','$asuntoMensaje','$mensaje','$fecha','$hora','false', 'true')";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());

$estado["mensaje"]= "Mensaje Enviado";
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>