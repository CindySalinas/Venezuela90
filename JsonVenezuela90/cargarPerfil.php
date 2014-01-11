<?php 
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$ced = $_COOKIE["cedulaAdmin"];

$sql = "SELECT U.Apellido, U.Nombre,U.Cedula,U.Nacionalidad,U.Direccion,U.Email, E.Edo_Civil,G.genero,U.Telefono FROM usuario U INNER JOIN estado_civil E ON U.Estado_Civil = E.id_Edo_civil INNER JOIN genero G ON U.Id_Genero = G.id_Genero WHERE U.Cedula = $ced";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
$i =0;

$cantidad = mysql_num_rows($result);
$estado["num"]= $cantidad;
while($row = mysql_fetch_row($result)){
	$estado[$i]["apll"]= $row[0];
	$estado[$i]["nom"]= $row[1];
	$estado[$i]["ced"]= $row[2];
	$estado[$i]["nacio"]= $row[3];
	$estado[$i]["direc"]= $row[4];
	$estado[$i]["mail"]= $row[5];
	$estado[$i]["edoC"]= $row[6];
	$estado[$i]["gen"]= $row[7];
	$estado[$i]["celP"]= $row[8];
	$i++;	
}
if($cantidad > 0){
	$estado["mensaje"] = "Datos de perfil Cargados con exito";
}else
$estado["mensaje"] = "Datos de perfil No cargaron / Falta cookie";

$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
//$sql= "SELECT Cedula,Nombre,Apellido,Correo FROM usuario WHERE Cedula='$usr'";
?>