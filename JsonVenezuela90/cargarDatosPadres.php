<?php 
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$ced = $_GET["cedula"];
$idAl;

$sql1 = "SELECT E.Id_Estudiante, E.Id_Usuario FROM estudiante E INNER JOIN Usuario U ON U.Id_Usuario = E.Id_Usuario WHERE U.Cedula = '$ced'";
$result = mysql_query($sql1) or die("Error de Consulta". mysql_error());


while($row = mysql_fetch_row($result)){
	 $idAl = $row[0];

}

$sql2 = "SELECT F.Id_Representante, R.Rol_Paternidad, U.Apellido, U.Nombre,U.Cedula,U.Email, U.Telefono,R.Id_Profesion,R.Lugar_Trabajo FROM usuario U INNER JOIN representante R ON U.Id_Usuario = R.Id_Usuario_Representante INNER JOIN representante_estudiante  F ON R.Id_Representante = F.Id_Representante WHERE F.Id_Estudiante = '$idAl;' AND R.Rol_Paternidad = 'Padre'";


$result = mysql_query($sql2) or die("Error de Consulta2". mysql_error());
$i =0;

$cantidad = mysql_num_rows($result);

while($row2 = mysql_fetch_row($result)){
	$estado[$i]["idRepre"]= $row2[0];
	$estado[$i]["pApll"]= $row2[2];
	$estado[$i]["pNom"]= $row2[3];
	$estado[$i]["pCed"]= $row2[4];
	$estado[$i]["pMail"]= $row2[5];
	$estado[$i]["ptelf"]= $row2[6];
	$estado[$i]["pProf"]= $row2[7];
	$estado[$i]["pTra"]= $row2[8];
	$i++;	
}
$sql3 = "SELECT F.Id_Representante, R.Rol_Paternidad, U.Apellido, U.Nombre,U.Cedula,U.Email, U.Telefono,R.Id_Profesion,R.Lugar_Trabajo FROM usuario U INNER JOIN representante R ON U.Id_Usuario = R.Id_Usuario_Representante  INNER JOIN representante_estudiante  F ON R.Id_Representante = F.Id_Representante WHERE F.Id_Estudiante = '$idAl;' AND R.Rol_Paternidad = 'Madre'";
$result = mysql_query($sql3) or die("Error de Consulta". mysql_error());
$x =0;

$cantidad = mysql_num_rows($result);

while($row3 = mysql_fetch_row($result)){
	$estado[$x]["idRepre2"]= $row3[0];
	$estado[$x]["mApll"]= $row3[2];
	$estado[$x]["mNom"]= $row3[3];
	$estado[$x]["mCed"]= $row3[4];
	$estado[$x]["mMail"]= $row3[5];
	$estado[$x]["mtelf"]= $row3[6];
	$estado[$x]["mProf"]= $row3[7];
	$estado[$x]["mTra"]= $row3[8];

	$x++;	
}
$sql4 = "SELECT R.Id_Representante_Emergencia,R.Nombre,R.Apellido,R.Telefono,R.Cedula FROM representante_emergencia R INNER JOIN estudiante E  ON R.Id_Representante_Emergencia = E.Id_Representante_Emergencia WHERE E.Id_Estudiante = '$idAl'";
$result = mysql_query($sql4) or die("Error de Consulta". mysql_error());
$y =0;

$cantidad = mysql_num_rows($result);

while($row4 = mysql_fetch_row($result)){
	$estado[$y]["idRepre3"]= $row4[0];
	$estado[$y]["eNom"]= $row4[1];
	$estado[$y]["eApll"]= $row4[2];
	$estado[$y]["eCed"]= $row4[3];
	$estado[$y]["etelf"]= $row4[4];
	$y++;	
}

if($cantidad == 0){
	$estado["num"] = 0;
	$estado["mensaje"]= "No Existe Foro Creado";
}
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';

?>