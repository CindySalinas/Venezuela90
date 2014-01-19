<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$materia = $_GET["mat"];

$sql = "SELECT E.Cedula,M.Nombre_Materia, D.Cedula, U.nombre,U.apellido from estudiante E  INNER JOIN estudiante_mat_doc EM ON EM.id_est = E.Id_Estudiante INNER JOIN materia M ON M.Id_Materia = EM.id_mat_docente  INNER JOIN materia_docente MD ON MD.Id_Materia = EM.id_mat_docente  INNER JOIN docente D ON D.Id_Docente = MD.Id_Docente INNER JOIN usuario U ON U.Cedula = E.Cedula WHERE M.Id_Materia = '$materia'";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;
$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){

	$estado[$i]["cedulaAlumno"]= $row[0];
	//$estado[$i]["cedulaProf"]= $row[2];
	$estado["NombreMateria"]= $row[1];
	$estado[$i]["nombreAlumno"]= $row[3];	
	$estado[$i]["apellidoAlumno"]= $row[4];	
	$cedProf = $row[2];
	$i++;	
}

$sql2 = "SELECT U.Nombre, U.Apellido,M.Nombre_Materia FROM usuario U INNER JOIN docente D ON D.Cedula = U.Cedula INNER JOIN materia_docente MD ON MD.Id_Docente = D.Id_Docente INNER JOIN materia M ON M.Id_Materia = MD.Id_Materia WHERE D.Cedula = '$cedProf'";
$result2 = mysql_query($sql2) or die("Error de Consulta". mysql_error());
	
while ($row2 = mysql_fetch_row($result2)) {
		$estado["profNom"] = $row2[0]." ".$row2[1];
}

if($cantidad == 0){
	$estado["num"] = 0;
	$estado["mensaje"]= "No existen Alumnos Para esta Clase";
}
//Convertir los resultados a formato json

$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';

?>