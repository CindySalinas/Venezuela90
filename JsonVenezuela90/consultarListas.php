<?php
// conexion bd 
include("conex.php");
//formato JSON
header('Content-type: application/json');

$idLista = $_GET["idList"];

$sql2 = "SELECT S.id_lista,U.Apellido,U.Nombre,U.Id_Genero FROM usuario U INNER JOIN lista_estudiantes L ON L.cedula = U.Cedula INNER JOIN listas S ON S.id_lista = L.id_lista WHERE S.id_lista = '$idLista' ORDER BY U.Apellido ASC";
$result2 = mysql_query($sql2) or die("Error de Consulta". mysql_error());
$i=0;
$cantidad = mysql_num_rows($result2);	
while ($row2 = mysql_fetch_row($result2)) {
		$estado[$i]["idLista"] = $row2[0];
		$estado[$i]["nombApellido"] = $row2[1].", ".$row2[2];
		$estado[$i]["sexo"] = $row2[3];
		$i++;
}

if($cantidad == 0){
	$estado["num"] = 0;
	$estado["mensaje"]= "No existen alumnos para esta lista";
}
//Convertir los resultados a formato json

$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';

?>