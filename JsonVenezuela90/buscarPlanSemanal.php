<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$idMateriaDocente= $_GET["id"];

$sql = "Select P.Id_Plan_Semanal, P.Numero_Semana, P.Fecha_Inicio, P.Fecha_Fin, P.Sesiones, P.Id_Materia_Docente, P.Numero_Alumnos, P.Primer_Tema, P.Primer_Inicio, P.Primer_Desarrollo, P.Primer_Cierre, P.Segundo_Tema, P.Segundo_Inicio, P.Segundo_Desarrollo, P.Segundo_Cierre, P.Observaciones, U.Nombre, U.Apellido, A.Nombre_Materia FROM plan_semanal P INNER JOIN horario_materia M ON P.Id_Materia_Docente=M.Id_Horario_Materia INNER JOIN docente D ON M.Id_Docente=D.Id_Docente INNER JOIN usuario U ON D.Id_Usuario_Docente=U.Id_Usuario INNER JOIN materia A ON M.Id_Materia=A.Id_Materia WHERE P.Id_Materia_Docente='$idMateriaDocente'";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
		
	$estado[$i]["idPlanSemanal"]= $row[0];
	$estado[$i]["numeroSemana"]= $row[1];
	$estado[$i]["fechaInicio"]= $row[2];
	$estado[$i]["fechaFin"]= $row[3];
	$estado[$i]["sesiones"]= $row[4];
	$estado[$i]["idMateriaDocente"]= $row[5];
	$estado[$i]["numeroAlumnos"]= $row[6];
	$estado[$i]["primerTema"]= $row[7];
	$estado[$i]["primerInicio"]= $row[8];
	$estado[$i]["primerDesarrollo"]= $row[9];
	$estado[$i]["primerCierre"]= $row[10];
	$estado[$i]["segundoTema"]= $row[11];
	$estado[$i]["segundoInicio"]= $row[12];
	$estado[$i]["segundoDesarrollo"]= $row[13];
	$estado[$i]["segundoCierre"]= $row[14];
	$estado[$i]["observaciones"]= $row[15];
	$estado[$i]["nombreDocente"]= $row[16];
	$estado[$i]["apellidoDocente"]= $row[17];
	$estado[$i]["nombreMateria"]= $row[18];
	$i++;	
}
//Convertir los resultados a formato json

$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
//$sql= "SELECT Cedula,Nombre,Apellido,Correo FROM usuario WHERE Cedula='$usr'";
?>