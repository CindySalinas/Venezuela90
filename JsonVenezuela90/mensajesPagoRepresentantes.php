<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$nombre= $_GET["nombre"];
$cedula= $_GET["cedula"];
$mesesConDeudas= $_GET["mesesAdeudados"];
$mesActual= $_GET["mesActualizado"];

$sql = "Select G.Grado, S.Seccion, R. M.mesPagado, U.Nombre, U.Apellido, U.Id_Usuario FROM mensualidad_pagada M INNER JOIN cancelacion_mensualidades C ON M.id_RegistroCanM=C.id_registroCanM INNER JOIN usuario U ON C.id_usuario_cancelacion_mensualidades = U.Id_Usuario INNER JOIN year_escolar Y ON C.id_year_escolar=Y.Id_Year_Escolar INNER JOIN year_actual A ON Y.Id_Year_Escolar=A.Id_Year_Escolar WHERE U.Cedula='$cedula' AND A.Id_Year_Actual=1 " ;

/*<center>U.E "VENEZUELA 90" ----- Valencia, 05 de Febredo de 2014</center></br><center>Valencia - Edo. Carabobo</center></br>Sr. Representante de <u>Cindy Yarimar Salinas Zambrano</u> curso <u>1er Año</u> sección <u>"A"</u> a través de la presente se le notifica el vencimiento de la (as) siguientes mensualidades: <u>Enero, Febrero, Marzo</u>. Sirvase pasar por la administración.</br></br><b>NOTA</b></br>-- El compromiso adquirido es cancelar <b>los primeros CINCO (5) días de cada mes.</b></br>-- Una vez vencido el plazo del segundo aviso de cobro, se tomarán las medidas pertinentes.</br>-- Se le agradece responder al mensaje con la mayor prontitud posible.*/

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
		
	$estado[$i]["nombreMes"]= $row[0];
	$estado[$i]["nombre"]= $row[1];
	$estado[$i]["apellido"]= $row[2];
	$estado[$i]["idU"]= $row[3];
	$i++;	
}
//Convertir los resultados a formato json

$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
//$sql= "SELECT Cedula,Nombre,Apellido,Correo FROM usuario WHERE Cedula='$usr'";
?>