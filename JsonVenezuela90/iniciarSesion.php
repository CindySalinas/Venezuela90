<?php 
include("conex.php");
//header('Content-type: application/json');

$user = $_GET["user"];
$pass = $_GET["pass"];
//Consulta a la base de datos
$sql = "SELECT Cedula,Nombre,Apellido,Id_Rol_Usuario  FROM usuario where Cedula='$user' and Password='$pass'";
//$sql = "SELECT * FROM usuario where Cedula='7100894' AND Password='7100894'";
$result = mysql_query($sql) or die ("Query error: " . mysql_error());

//Variable que guardará cuantos datos arroja la base de datos
$cantidad=0;

while($row = mysql_fetch_row($result)) {
	$cantidad++;
	$c =$row[0];
	//$tipo = $row[3];
	$nom = $row[1];
	$app= $row[2];
	//echo $tipo;
	$resultados["T"] = $row[3];
}
$resultados["validacion"] = $cantidad;
/*if($tipo !=0){
	$resultados["T"] = $tipo;
}
else {
	$tipo =0;
}*/


if($cantidad>0 && $resultados["T"] == 1){
	setcookie("cedulaAdmin",$c,time()+36000,"/");
	setcookie("adminName",$nom." ".$app,time()+36000,"/");
	$resultados["mensaje"] = "Bienvenido Admin $nom $app";
}
else
if($cantidad>0 &&  $resultados["T"]== 2){
	//$resultados["mensaje"] = "Administrador $usuarioEnviado";
	setcookie("cedulaProf",$c,time()+36000,"/");
	setcookie("profName",$nom." ".$app,time()+36000,"/");
	$resultados["mensaje"] = "Bienvenido Profesor $nom $app";
}
else
	if($cantidad>0 &&  $resultados["T"]== 3){
	//$resultados["mensaje"] = "Administrador $usuarioEnviado";
	setcookie("cedulaStudent",$c,time()+36000,"/");
	setcookie("studentName",$nom." ".$app,time()+36000,"/");
	$resultados["mensaje"] = "Bienvenido Alumno $nom $app";
}
else{
	$resultados["mensaje"] = "Usuario o Password Incorrectos";
	//$resultados["validacion"] = 0;
	//$resultados["T"] = 0;
}
	

/*Convierte los resultados a formato json*/
$resultadosJson = json_encode($resultados);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $resultadosJson . ');';

?>


