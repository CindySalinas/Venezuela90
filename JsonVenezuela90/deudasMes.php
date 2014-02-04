<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$mes= $_GET["mes"];

$sql = "SELECT U.Id_Usuario, U.Nombre, U.Apellido, U.Cedula FROM cancelacion_mensualidades C INNER JOIN usuario U ON C.id_usuario_cancelacion_mensualidades=U.Id_Usuario INNER JOIN year_escolar Y ON C.id_year_escolar=Y.Id_Year_Escolar INNER JOIN year_actual A ON Y.Id_Year_Escolar=A.Id_Year_Escolar WHERE C.Concepto_Pago='Inscripcion' AND A.Id_Year_Actual=1" ;

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
		
	$estado[$i]["idU"]= $row[0];
	$estado[$i]["nombre"]= $row[1];
	$estado[$i]["apellido"]= $row[2];
	$estado[$i]["cedula"]= $row[2];
	$i++;	
}
//Convertir los resultados a formato json

$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
//$sql= "SELECT Cedula,Nombre,Apellido,Correo FROM usuario WHERE Cedula='$usr'";
?>