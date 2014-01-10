<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$val0= $_GET["val0"];
$val1= $_GET["val1"];
//$val2= $_GET["val2"];

$sql1= "SELECT id_e_prestamo,nombre,cedula,grado,id_libro FROM estudiante_prestamo WHERE $val0 LIKE '%$val1%'";
$result1 = mysql_query($sql1) or die("Error de Consulta". mysql_error());

$e =0;
$i=0;
$cantidad = mysql_num_rows($result1);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result1)){
	
	$estado[$e]["idPres"]= $row[0];
	$estado[$e]["nomPres"]= $row[1];
	$estado[$e]["cedPres"]= $row[2];
	$estado[$e]["graPres"]= $row[3];
	$estado[$e]["idLibroPRes"]= $row[4];
	
	$sql2 = "SELECT id_libro,nombre_libro,autor_libro,materia_libro,year_libro,edit_libro,edicion_libro,cantidad_libro FROM libros WHERE id_libro= '$row[4]'";
	$result2 = mysql_query($sql2) or die("Error de Consulta". mysql_error());

while($row2 = mysql_fetch_row($result2)){
	$estado[$i]["idLibro"]= $row2[0];
	$estado[$i]["nom"]= $row2[1];
	$estado[$i]["aut"]= $row2[2];
	$estado[$i]["mat"]= $row2[3];
	$estado[$i]["year"]= $row2[4];
	$estado[$i]["edit"]= $row2[5];
	$estado[$i]["edic"]= $row2[6];
	$estado[$i]["cant"]= $row2[7];
	$e++;
	$i++;
}

}
if($cantidad == 0){
	$estado["num"] = 0;
	$estado["mensaje"]= "No Existe el Prestamo";
}
/*
$sql2 = "SELECT id_libro,nombre_libro,autor_libro,materia_libro,year_libro,edit_libro,edicion_libro,cantidad_libro FROM libros WHERE id_libro= '$val3'";
$result2 = mysql_query($sql2) or die("Error de Consulta". mysql_error());
$records2 = array();*/
/*$i =0;

while($row2 = mysql_fetch_row($result2)){
	$estado[$i]["idLibro"]= $row2[0];
	$estado[$i]["nom"]= $row2[1];
	$estado[$i]["aut"]= $row2[2];
	$estado[$i]["mat"]= $row2[3];
	$estado[$i]["year"]= $row2[4];
	$estado[$i]["edit"]= $row2[5];
	$estado[$i]["edic"]= $row2[6];
	$estado[$i]["cant"]= $row2[7];
	$i++;
	
}*/
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);
/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
//$sql= "SELECT Cedula,Nombre,Apellido,Correo FROM usuario WHERE Cedula='$usr'";
?>