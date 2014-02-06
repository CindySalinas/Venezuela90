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
		
	
	$cedu=$row[3];
	$sql2 = "SELECT U.Id_Usuario, U.Nombre, U.Apellido, U.Cedula, P.mesPagado FROM cancelacion_mensualidades C INNER JOIN usuario U ON C.id_usuario_cancelacion_mensualidades=U.Id_Usuario INNER JOIN year_escolar Y ON C.id_year_escolar=Y.Id_Year_Escolar INNER JOIN year_actual A ON Y.Id_Year_Escolar=A.Id_Year_Escolar INNER JOIN mensualidad_pagada P ON C.id_registroCanM=P.id_RegistroCanM WHERE C.Concepto_Pago='Mensualidades' AND A.Id_Year_Actual=1 AND U.Cedula='$cedu'" ;

	$result2 = mysql_query($sql2) or die("Error de Consulta". mysql_error());
	$records2 = array();
	$i2 =0;

	$cantidad2 = mysql_num_rows($result2);
	//$estado["num"]= $cantidad;
	while($row2 = mysql_fetch_row($result2)){
			
		$estado[$i]["idU"]= $row2[0];
		$estado[$i]["nombre"]= $row2[1];
		$estado[$i]["apellido"]= $row2[2];
		$estado[$i]["cedula"]= $row2[3];
		$estado[$i]["mes"]= $row2[4];
		$i2++;	
	}

	$i++;	
}
//Convertir los resultados a formato json

$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
//$sql= "SELECT Cedula,Nombre,Apellido,Correo FROM usuario WHERE Cedula='$usr'";
?>