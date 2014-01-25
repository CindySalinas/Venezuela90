<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$val0= $_GET["val0"];
$val1= $_GET["val1"];
if($val0 == "cedula"){
	$sql1 = "Select P.id_prestamoLibro,U.Cedula,U.Nombre,U.Apellido,P.cedulaEstudiante,P.id_Libro,P.fecha_entrega,P.fecha_salida,L.id_libro,L.nombre_libro,L.autor_libro,L.materia_libro,L.year_libro,L.edit_libro,L.edicion_libro,L.cantidad_libro FROM  usuario U INNER JOIN prestamo_libro  P ON U.cedula = P.cedulaEstudiante INNER JOIN libros L ON P.id_Libro = L.id_libro WHERE U.Cedula = $val1";
}
else 
if($val0 == "dateP"){
	$sql1 = "Select P.id_prestamoLibro,U.Cedula,U.Nombre,U.Apellido,P.cedulaEstudiante,P.id_Libro,P.fecha_entrega,P.fecha_salida,L.id_libro,L.nombre_libro,L.autor_libro,L.materia_libro,L.year_libro,L.edit_libro,L.edicion_libro,L.cantidad_libro FROM  usuario U INNER JOIN prestamo_libro  P ON U.cedula = P.cedulaEstudiante INNER JOIN libros L ON P.id_Libro = L.id_libro WHERE P.fecha_salida = '$val1'";
}

else
if($val0 == "todo"){
	$sql1 = "Select P.id_prestamoLibro,U.Cedula,U.Nombre,U.Apellido,P.cedulaEstudiante,P.id_Libro,P.fecha_entrega,P.fecha_salida,L.id_libro,L.nombre_libro,L.autor_libro,L.materia_libro,L.year_libro,L.edit_libro,L.edicion_libro,L.cantidad_libro FROM  usuario U INNER JOIN prestamo_libro  P ON U.cedula = P.cedulaEstudiante INNER JOIN libros L ON P.id_Libro = L.id_libro";
}else{
	$estado["mensaje"]= "no se puede realizar la busqueda";
}

$result1 = mysql_query($sql1) or die("Error de Consulta". mysql_error());
$e =0;
$i=0;
$cantidad = mysql_num_rows($result1);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result1)){
	
	$estado[$i]["idPres"]= $row[0];
	$estado[$i]["nomPres"]= $row[2]." ".$row[3];
	$estado[$i]["cedPres"]= $row[1];
	$estado[$i]["graPres"]= $row[4];
	$estado[$i]["idLibroPRes"]= $row[5];
	//$algo = $row[5];
	
	//$sql2 = "SELECT id_libro,nombre_libro,autor_libro,materia_libro,year_libro,edit_libro,edicion_libro,cantidad_libro FROM libros WHERE id_libro= '$algo'";

	//$result2 = mysql_query($sql2) or die("Error de Consulta". mysql_error());

	//$cantidad2 = mysql_num_rows($result2);
	
	$estado[$i]["idLibro"]= $row[8];
	$estado[$i]["nom"]= $row[9];
	$estado[$i]["aut"]= $row[10];
	$estado[$i]["mat"]= $row[11];
	$estado[$i]["year"]= $row[12];
	$estado[$i]["edit"]= $row[13];
	$estado[$i]["edic"]= $row[14];
	$estado[$i]["cant"]= $row[15];
	$i++;

}
if($cantidad == 0){
	$estado["num"] = 0;
	$estado["mensaje"]= "No Existe el Prestamo";
}

//Convertir los resultados a formato json
$estadoJson = json_encode($estado);
/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
//$sql= "SELECT Cedula,Nombre,Apellido,Correo FROM usuario WHERE Cedula='$usr'";
?>