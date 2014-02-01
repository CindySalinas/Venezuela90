<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-Type: text/html; charset=iso-8859-1');

$idPlanificacion= $_GET["id"];
$idLapso= $_GET["lapso"];
$nume= $_GET["numero"];

$sql = "SELECT A.Objetivos_Especificos, A.Contenido, A.Estrategias_Metodologicas, A.Recurso, A.Ponderacion, A.Tecnica_Evaluacion, A.Fecha, P.Id_Lapso FROM planificacion_por_lapso P INNER JOIN actividades_planificacion_por_lapso A ON P.Id_Planificacion_Por_Lapso=A.Id_Planificacion_Por_Lapso WHERE P.Id_Planificacion_Por_Lapso='$idPlanificacion' AND P.Id_Lapso='$idLapso'";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){		
	
	$estado[$i]["objetivos"]= $row[0];
	$estado[$i]["contenido"]= $row[1];
	$estado[$i]["estrategia"]= $row[2];
	$estado[$i]["recurso"]= $row[3];
	$estado[$i]["ponderacion"]= $row[4];
	$estado[$i]["tecnicaEvaluacion"]= $row[5];
	$estado[$i]["fecha"]= $row[6];
	$estado[$i]["lap"]= $row[7];
	$estado[$i]["numerito"]= $nume;
	$i++;	
}


//Convertir los resultados a formato json

$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
//$sql= "SELECT Cedula,Nombre,Apellido,Correo FROM usuario WHERE Cedula='$usr'";
?>