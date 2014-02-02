<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$idMateriaDocente= $_GET["id"];

$sql = "SELECT P.Mencion, U.Nombre, U.Apellido, M.Nombre_Materia, G.Grado, L.Lapso, Y.Year_Escolar, P.Id_Planificacion_Por_Lapso, P.Id_Lapso FROM planificacion_por_lapso P INNER JOIN materia_docente X ON P.Id_Materia_Docente=X.Id_Materia_Docente INNER JOIN docente D ON X.Id_Docente=D.Id_Docente INNER JOIN usuario U ON D.Id_Usuario_Docente=U.Id_Usuario INNER JOIN materia M ON X.Id_Materia=M.Id_Materia INNER JOIN grado G ON X.Id_Grado=G.Id_Grado INNER JOIN lapso L ON P.Id_Lapso=L.Id_Lapso INNER JOIN year_escolar Y ON P.Id_Year=Y.Id_Year_Escolar WHERE P.Id_Materia_Docente='$idMateriaDocente'";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
		
	$estado[$i]["mencion"]= $row[0];
	$estado[$i]["nombreDocente"]= $row[1];
	$estado[$i]["apellidoDocente"]= $row[2];
	$estado[$i]["nombreMateria"]= $row[3];
	$estado[$i]["grado"]= $row[4];
	$estado[$i]["lapso"]= $row[5];
	$estado[$i]["yearEscolar"]= $row[6];
	$estado[$i]["idplanificacion"]= $row[7];
	$estado[$i]["idlapso"]= $row[8];
	$i++;	
}


//Convertir los resultados a formato json

$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
//$sql= "SELECT Cedula,Nombre,Apellido,Correo FROM usuario WHERE Cedula='$usr'";
?>