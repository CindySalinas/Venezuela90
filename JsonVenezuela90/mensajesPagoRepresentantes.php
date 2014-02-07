<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$nombre= $_GET["nombre"];
$cedula= $_GET["cedula"];
$mesesConDeudas= $_GET["mesesAdeudados"];
$mesActual= $_GET["mesActualizado"];
$fecha="06/02/2014";
$hora="10:00pm";
$sql = "SELECT G.Grado, S.Seccion, R.Id_Representante FROM usuario U INNER JOIN estudiante E ON U.Id_Usuario=E.Id_Usuario INNER JOIN grado G ON E.Id_Grado=G.Id_Grado INNER JOIN seccion S ON E.Id_Seccion=S.Id_Seccion INNER JOIN representante_estudiante R ON E.Id_Estudiante=R.Id_Estudiante WHERE U.Cedula='$cedula'";


$vector1 = array ( "Septiembre", "Octubre", "Noviembre", "Diciembre", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto" );

$mesesNombres='';

while($mesesConDeudas>0)
{
	if($mesesNombres!='')
	{
		$mesesNombres = $vector1[$mesActual] . ", " . $mesesNombres;
	}
	else
	{
		$mesesNombres = $vector1[$mesActual];
	}
	$mesesConDeudas--;
	$mesActual--;
}

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$records = array();
$i =0;

$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
		
	$gradoo= $row[0];
	$seccionn= $row[1];
	$repre= $row[2];

	$menmen="<center>U.E VENEZUELA 90 ----- Valencia, 06 de Febredo de 2014</center></br><center>Valencia - Edo. Carabobo</center></br>Sr. Representante de <u>" . $nombre . "</u> curso <u>" . $gradoo . "</u> sección <u>" . $seccionn . "</u> a través de la presente se le notifica el vencimiento de la (as) siguientes mensualidades: <u> " . $mesesNombres . "</u>. Sirvase pasar por la administración.</br></br><b>NOTA</b></br>-- El compromiso adquirido es cancelar <b>los primeros CINCO (5) días de cada mes.</b></br>-- Una vez vencido el plazo del segundo aviso de cobro, se tomarán las medidas pertinentes.</br>-- Se le agradece responder al mensaje con la mayor prontitud posible.";

		/*$menmen="<center>U.E 'VENEZUELA 90' ----- Valencia, 06 de Febredo de 2014</center></br><center>Valencia - Edo. Carabobo</center></br>Sr. Representante de <u>" . "$nombre" . "</u> curso <u>" . "$gradoo" . "</u> sección <u>'" . "$seccionn" . "'</u> a través de la presente se le notifica el vencimiento de la (as) siguientes mensualidades: <u> " . "$mesesNombres" . "</u>. Sirvase pasar por la administración.</br></br><b>NOTA</b></br>-- El compromiso adquirido es cancelar <b>los primeros CINCO (5) días de cada mes.</b></br>-- Una vez vencido el plazo del segundo aviso de cobro, se tomarán las medidas pertinentes.</br>-- Se le agradece responder al mensaje con la mayor prontitud posible.";*/

	$sql2 = "SELECT U.Email FROM usuario U INNER JOIN representante R ON U.Id_Usuario=R.Id_Usuario_Representante WHERE R.Id_Representante='$repre'";

	$result2 = mysql_query($sql2) or die("Error de Consulta". mysql_error());
	$records2 = array();
	$i2 =0;

	$cantidad2 = mysql_num_rows($result2);
	//$estado["num"]= $cantidad;
	while($row2 = mysql_fetch_row($result2)){

		$correo=$row2[0];

		$sql3 = "INSERT INTO mensajes (Correo_Remitente,Correo_Destinatario,Asunto_Mensaje, Mensaje,Fecha,Hora, Favorito, Leido) VALUES ('cindysalinas15@gmail.com','$correo','Pagos Administración','$menmen','$fecha','$hora','false', 'false')";

		$result3 = mysql_query($sql3) or die("Error de Consulta". mysql_error());


		$i2++;	
	}

	$i++;	
}
$estado["num"]= $i;
//Convertir los resultados a formato json

$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
//$sql= "SELECT Cedula,Nombre,Apellido,Correo FROM usuario WHERE Cedula='$usr'";
?>