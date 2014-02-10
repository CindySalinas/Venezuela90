<?php 
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$ced = $_GET["cedula"];

$sql = "SELECT  U.Nombre, U.Apellido, U.Cedula, U.Direccion,U.Email,U.Telefono,E.Id_Grado,E.Id_Year_Escolar,E.Fecha_Nacimiento,E.Lugar_Nacimiento,E.Alergia,E.Enfermedad, E.Materia_Pendiente,E.Id_Religion,E.Id_Actividad,E.Entidad,U.Id_Genero,E.Plantel_Procendecia,E.Id_Estudiante FROM usuario U INNER JOIN estudiante E ON E.Id_Usuario_Estudiante = U.Cedula WHERE U.Cedula = '$ced'";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$i =0;

$cantidad = mysql_num_rows($result);

while($row = mysql_fetch_row($result)){
	$estado[$i]["nom"]= $row[0];
	$estado[$i]["apll"]= $row[1];
	$estado[$i]["ced"]= $row[2];
	$estado[$i]["direc"]= $row[3];
	$estado[$i]["mails"]= $row[4];
	$estado[$i]["telf"]= $row[5];
	$estado[$i]["idGrado"]= $row[6];
	$estado[$i]["idYearEs"]= $row[7];
	$estado[$i]["fechaNac"]= $row[8];
	$estado[$i]["dondeNa"]= $row[9];
	$estado[$i]["alergia"]= $row[10];
	$estado[$i]["enferm"]= $row[11];
	$estado[$i]["matPend"]= $row[12];
	$estado[$i]["idReli"]= $row[13];
	$estado[$i]["idActi"]= $row[14];
	$estado[$i]["entida"]= $row[15];
	$estado[$i]["gener"]= $row[16];
	$estado[$i]["plantels"]= $row[17];
	$estado[$i]["idEs"]= $row[18];
	$i++;	
}
if($cantidad == 0){
	$estado["num"] = 0;
	$estado["mensaje"]= "No Existe Foro Creado";
}
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
//$sql= "SELECT Cedula,Nombre,Apellido,Correo FROM usuario WHERE Cedula='$usr'";
?>