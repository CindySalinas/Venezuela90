<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$sql = "SELECT id_libro,nombre_libro,autor_libro,materia_libro,year_libro,edit_libro,edicion_libro,cantidad_libro FROM libros";
$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);

//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
	$estado[$i]["idLibro"]= $row[0];
	$estado[$i]["nom"]= $row[1];
	$estado[$i]["aut"]= $row[2];
	$estado[$i]["mat"]= $row[3];
	$estado[$i]["year"]= $row[4];
	$estado[$i]["edit"]= $row[5];
	$estado[$i]["edic"]= $row[6];
	$estado[$i]["cant"]= $row[7];
	$i++;
	
}


if($cantidad == 0){
	$estado["num"] = 0;
	$estado["mensaje"]= "No Hay libros que mostrar";
}
//Convertir los resultados a formato json

$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
//$sql= "SELECT Cedula,Nombre,Apellido,Correo FROM usuario WHERE Cedula='$usr'";
?>