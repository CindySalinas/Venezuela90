<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$cedulaUsuario= $_GET["cedula"];

$sql2 = "Select Email FROM usuario Where Cedula='$cedulaUsuario'";

$result2 = mysql_query($sql2) or die("Error de Consulta". mysql_error());

$correo="";
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result2)){
	$correo= $row[0];
}

$sql = "Select Id_Mensaje, Correo_Remitente, Correo_Destinatario, Asunto_Mensaje, Mensaje FROM mensajes Where Correo_Destinatario='$correo' and Leido='false' order by Id_Mensaje DESC";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){

	$correo2 = $row[1];
	$sql2 = "Select Nombre, Apellido FROM usuario Where Email='$correo2'";

	$result2 = mysql_query($sql2) or die("Error de Consulta". mysql_error());
	$i3 =0;
	$nombres="";

	//$estado["num"]= $cantidad;
	while($row2 = mysql_fetch_row($result2)){
		$nombres= $row2[0] . " " . $row2[1];
		$i3++;
	}

		
	$estado[$i]["idMensaje"]= $row[0];
	$estado[$i]["correoRemitente"]= $row[1];
	$estado[$i]["correoDestino"]= $row[2];
	$estado[$i]["asuntoMensaje"]= $row[3];	
	$estado[$i]["mensaje"]= $row[4];	
	$estado[$i]["nombresDestino"]= $nombres;	
	$estado[$i]["cantMensajes"]= mysql_num_rows($result);	
	$i++;	
}
if($cantidad == 0){
	$estado["num"] = 0;
	$estado["mensaje"]= "No Tiene Mensajes Sin Leer";
}
//Convertir los resultados a formato json

$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
//$sql= "SELECT Cedula,Nombre,Apellido,Correo FROM usuario WHERE Cedula='$usr'";
?>