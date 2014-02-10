
<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$nom= $_GET["nombre"];
$ap = $_GET["apellido"];
$ced = $_GET["cedula"];
$mail = $_GET["email"];
$gen = $_GET["genero"];
$edo= $_GET["edCivil"];
$tlf =$_GET["telf"];
$dir = $_GET["direc"];

$ids = $_GET["idCrear"];
$nacio = $_GET["nacion"];
if($ids == 1){
	$sql = "INSERT INTO usuario (Nombre,Apellido,Cedula,Email,Password,Id_Genero,Estado_Civil,Nacionalidad,Telefono,Direccion,Id_Rol_Usuario) VALUES ('$nom','$ap', '$ced','$mail','$ced','$gen','$edo','$nacio','$tlf','$dir','$ids')";

$result = mysql_query($sql) or die("Error de Consulta1 ". mysql_error());
}
else
if($ids == 2){
	$lug = $_GET["lugar"];
	$fec = $_GET["fechNa"];
	$sql2 = "INSERT INTO usuario (Nombre,Apellido,Cedula,Email,Password,Id_Genero,Estado_Civil,Nacionalidad,Telefono,Direccion,Id_Rol_Usuario) VALUES ('$nom','$ap', '$ced','$mail','$ced','$gen','$edo','$nacio','$tlf','$dir','$ids')";
	
	$result = mysql_query($sql2) or die("Error de Consulta2 ". mysql_error());
	$utlID = mysql_insert_id();
	echo $utlID;
	$sql3 = "INSERT INTO docente (Id_Usuario_Docente,fecha_nacimiento,lugar_nacimiento) VALUES('$utlID','$fec','$lug')";
	
	$result = mysql_query($sql3) or die("Error de Consulta3 ". mysql_error());
}



$estado["mensaje"]= "Nueva Usuario Creado";
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>