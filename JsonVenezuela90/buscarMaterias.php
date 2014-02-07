<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$cedulaDocente= $_GET["cedul"];

$sql = "Select M.Id_Materia, M.Nombre_Materia FROM materia M INNER JOIN horario_materia A ON M.Id_Materia = A.Id_Materia INNER JOIN docente D ON A.Id_Docente = D.Id_Docente INNER JOIN usuario U ON D.Id_Usuario_Docente = U.Id_Usuario WHERE U.Cedula = '$cedulaDocente'";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
		
	$estado[$i]["idMateria"]= $row[0];
	$estado[$i]["nombreMateria"]= $row[1];
	$i++;	
}
//Convertir los resultados a formato json

$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
//$sql= "SELECT Cedula,Nombre,Apellido,Correo FROM usuario WHERE Cedula='$usr'";
?>