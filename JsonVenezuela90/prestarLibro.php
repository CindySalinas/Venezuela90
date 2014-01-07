<?php 
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$val1 = $_GET["val1"];
$val2 = $_GET["id_libro"];
$val3 = $_GET["fechaS"];
$val4 = $_GET["fechaE"];
$val5 = $_GET["val5"];
$val6 = $_GET["val6"];
$val7 = $_GET["val7"];



$sql1 = "INSERT INTO prestamo_libro(cedulaEstudiante,id_libro,fecha_salida,fecha_entrega) VALUES ('$val1','$val2','$val3','$val4')";
$result = mysql_query($sql1) or die ("Error de Consulta". mysql_error());
if(mysql_affected_rows() != -1){
	$estado["con"]=1;
	$estado["mensaje"] = "El Libro se ha prestado con exito";
}else{
	$estado["con"]=0;
}

$sql2 = "INSERT INTO estudiante_prestamo(cedula,nombre,grado,id_libro,dateP) VALUES('$val1','$val5','$val6','$val2','$val3')";
$result2 = mysql_query($sql2) or die ("Error de Consulta". mysql_error());

if(mysql_affected_rows() != -1){
	$estado["con"]=1;
	$estado["mensaje"] = "El Libro se ha prestado con exito";
}
else{
	$estado["con"]=0;
}

$sql3 = "UPDATE libros SET cantidad_libro = '$val7' WHERE id_libro = '$val2'";
$result3 = mysql_query($sql3) or die ("Error de Consulta". mysql_error());
if(mysql_affected_rows() != -1){
	$estado["con"]=1;
	$estado["mensaje"] = "El Libro se ha prestado con exito";
}else{
	$estado["con"]=0;
}


$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
//$sql= "SELECT Cedula,Nombre,Apellido,Correo FROM usuario WHERE Cedula='$usr'";
?>