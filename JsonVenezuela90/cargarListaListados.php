<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$sql2 = "SELECT id_lista,nombre_Lista,id_tipo_lista from listas";
$result2 = mysql_query($sql2) or die("Error de Consulta". mysql_error());
$i=0;
$cantidad = mysql_num_rows($result2);	
while ($row2 = mysql_fetch_row($result2)) {
		$estado[$i]["idLista"] = $row2[0];
		$estado[$i]["nomLista"] = $row2[1];
		$estado[$i]["tipoLista"] = $row2[2];
		$i++;
}

if($cantidad == 0){
	$estado["num"] = 0;
	$estado["mensaje"]= "No existen Listas";
}
//Convertir los resultados a formato json

$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';

?>