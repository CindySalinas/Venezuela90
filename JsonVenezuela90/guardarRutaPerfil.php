<?php
// conexion bd 
include("conex.php");
	 
      $rt  = $_GET["path"];
 		$ced = $_COOKIE["cedulaAdmin"];
	if($rt != ""){
			$sql = "INSERT INTO  foto_perfil_usuario (Ruta_Foto_Perfil) VALUES ('$rt')";
		 	$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
		 	$utlID = mysql_insert_id();
		 	$sql2 = "UPDATE Usuario SET id_Foto_Perfil = '$utlID' WHERE Cedula = '$ced'";
		 	$result2 = mysql_query($sql2) or die("Error de Consulta". mysql_error());
		 	$estado["mensaje"] = "Cambiada";
		 	$estado["num"] = 1;
	}else{
			$estado["num"] = 0;
			$estado["errors"] = "Error/seleccione archivo";
	}
		 
	

//Convertir los resultados a formato json

$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
//$sql= "SELECT Cedula,Nombre,Apellido,Correo FROM usuario WHERE Cedula='$usr'";
?>