<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$asignaturaDocente= $_GET["mat"];
$gradoDocente= $_GET["grad"];

$sql = "Select U.Cedula FROM usuario U INNER JOIN docente D ON U.Id_Usuario=D.Id_Usuario_Docente INNER JOIN horario_materia A ON D.Id_Docente=A.Id_Docente WHERE A.Id_Materia='$asignaturaDocente' AND A.Id_Grado='$gradoDocente'";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
		
	$estado[$i]["cedulaDocente"]= $row[0];
	$i++;	
}

$estado["num"] = $i;

//Convertir los resultados a formato json

$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
//$sql= "SELECT Cedula,Nombre,Apellido,Correo FROM usuario WHERE Cedula='$usr'";
?>