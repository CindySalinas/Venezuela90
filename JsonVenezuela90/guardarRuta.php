<?php
// conexion bd 
include("conex.php");

      $seccion = $_GET["idSeccion"];
      $materia = $_GET["horarioMaterias"];
      $rt  = $_GET["path"];
 	
	if($rt != ""){
			$sql = "INSERT INTO  material_estudio (material,id_seccion,Id_Horario_Materia) VALUES ('$rt','$seccion','$materia')";
		 	$result = mysql_query($sql) or die("Error de Consulta". mysql_error());
		 	$estado["mensaje"] = "Guardado";
		 	$estado["num"] = 1;
	}else{
			$estado["num"] = 0;
			$estado["errors"] = "error al guardar/seleccione archivo";
	}
		 
	

//Convertir los resultados a formato json

$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
//$sql= "SELECT Cedula,Nombre,Apellido,Correo FROM usuario WHERE Cedula='$usr'";
?>