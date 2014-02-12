<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$idPadre = $_GET["idPadre"];
$sql = "Select Id_Estudiante from representante_estudiante where Id_Representante= '$idPadre'";
$result = mysql_query($sql) or die("Error de Consulta 1". mysql_error());
//$records = array();
$i =0;
$cantidad = mysql_num_rows($result);
//$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
		$estado[$i]["idAlum"] = $row[0];

		$sql3 = "SELECT U.Nombre, U.Apellido, U.cedula FROM  usuario U INNER JOIN estudiante E ON U.Id_Usuario = E.Id_Usuario WHERE Id_Estudiante = '$row[0]'";
		$result2 = mysql_query($sql3) or die("Error de Consulta 2". mysql_error());
		while($row2 = mysql_fetch_row($result2)){
			$estado[$i]["nombAppl"] = $row2[0]." ".$row2[1];
			$estado[$i]["cedEstud"] = $row2[2];
		}
		$i++;
}

//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>