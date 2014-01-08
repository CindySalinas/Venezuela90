<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$val1= $_GET["val1"];
$val2= $_GET["val2"];
$val3= $_GET["val3"];
$sql = "DELETE FROM estudiante_prestamo WHERE id_e_prestamo ='$val1'";
$result = mysql_query($sql) or die("Error de Consulta". mysql_error());

if(mysql_affected_rows() !=0){
	$estado["con"]=1;
	$estado["mensaje"] = "El Libro se ha Eliminado con exito";
	$sql2 = "UPDATE libros SET cantidad_libro = '$val2' WHERE id_libro = '$val3'";
$result2 = mysql_query($sql2) or die("Error de Consulta". mysql_error());
}else{
	$estado["con"]=0;
	$estado["mensaje"] = "El libro no se pudo eliminar";
}
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>