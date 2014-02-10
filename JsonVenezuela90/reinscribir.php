<?php
//conexion a la BD
include("conex.php");
//header('Content-type: application/json');

// Obtener Valores enviados desde el formulario

// Alumno
$nomA = $_GET["firsName"];
$apA = $_GET["lastName"];;
$fechaA = $_GET["birthDay"];
$cedA = $_GET["cI"];
$lugarA = $_GET["whereBorn"];
$entiA = $_GET["entity"];
$dirA = $_GET["addres"];
$mailA = $_GET["email"];
$gen = $_GET["genero"];
$tlf1A = $_GET["phone1"];
$yearA = $_GET["year"];
$aPlan = $_GET["plantel"];
$aMatP = $_GET["matP"];
$aAct = $_GET["actividad"];
$aRel = $_GET["religion"];
$aEnf = $_GET["sicking"];
$aAler = $_GET["alergy"];
$ingre = $_GET["fechaIngreso"];
$esYear = $_GET["yearEscolar"];
// Padre
$pNom = $_GET["firsNameFather"];
$pAp = $_GET["lastNameFather"];
$pCed = $_GET["cIfather"];
$pPro = $_GET["profesion"];
$pTrb = $_GET["whereWork"];
$pTlf1 = $_GET["phone3"];

//Mandre
$mNom = $_GET["firsNameMother"];
$mAp = $_GET["lastNameMother"];
$mCed = $_GET["cIMother"];
$mail2 = $_GET["emailPadre"];
$mPro = $_GET["profesionMother"];
$mTrb = $_GET["whereWorkMother"];
$mTlf1 = $_GET["phone5"];
$mail3 = $_GET["emailMadre"];
//Emergencia
$eNom = $_GET["firsNameE"];
$eAp = $_GET["lastNameE"];
$eCed = $_GET["cIE"];
$eTlf1 = $_GET["phone7"];
$id1 = $_GET["idAl"];
$id2 = $_GET["idPa"];
$id3 = $_GET["idMa"];
$id4 = $_GET["idEm"];

$sql = "UPDATE usuario SET Nombre = '$nomA', Apellido = '$apA', Cedula = '$cedA', Email = '$mailA', Id_Genero = '$gen',Telefono ='$tlf1A' WHERE Cedula = '$cedA'";

$result = mysql_query($sql) or die("Error de Consulta 1 ". mysql_error());

$sql2 = "UPDATE estudiante SET Id_Grado = '$yearA', Id_Religion = '$aRel', Id_Year_Escolar = '$esYear',Entidad = '$entiA', Fecha_Nacimiento ='$fechaA',Lugar_Nacimiento = '$lugarA',Materia_Pendiente = '$aMatP', Alergia = '$aAler', Enfermedad = '$aEnf', Id_Actividad = '$aAct', Plantel_Procendecia = '$aPlan' WHERE Id_Estudiante = '$id1'";

$result = mysql_query($sql2) or die("Error de Consulta 2 ". mysql_error());

$sql3 = "UPDATE usuario SET Nombre = '$pNom', Apellido = '$pAp', Cedula = '$pCed', Email = '$mail2',Telefono ='$pTlf1' WHERE Cedula = '$pCed'";

$result = mysql_query($sql3) or die("Error de Consulta 3 ". mysql_error());

$sql4 = "UPDATE usuario SET Nombre = '$mNom', Apellido = '$mAp', Cedula = '$mCed', Email = '$mail3',Telefono ='$mTlf1' WHERE Cedula = '$mCed'";

$result = mysql_query($sql4) or die("Error de Consulta 4 ". mysql_error());

$sql5 = "UPDATE representante SET Id_Profesion = '$pPro', Lugar_Trabajo = '$pTrb' WHERE Id_Representante = '$id2'";

$result = mysql_query($sql5) or die("Error de Consulta 5 ". mysql_error());

$sql6 = "UPDATE representante SET Id_Profesion = '$mPro', Lugar_Trabajo = '$mTrb' WHERE Id_Representante = '$id3'";

$result = mysql_query($sql6) or die("Error de Consulta 6 ". mysql_error());

$sql7 = "UPDATE representante_emergencia  SET Nombre = 'eNom', Apellido = 'eAp', Telefono = 'eTlf1', Cecula = 'eCed' WHERE Id_Representante_Emergencia = '$id4'";

$result = mysql_query($sql7) or die("Error de Consulta 7 ". mysql_error());

// Verifica que la consulta no tenga error
if(mysql_affected_rows() != -1){
	$estado["con"]=1;
	$estado["mensaje"] = "Alumno Reinscrito Con exito";
}
else{
	$estado["con"]=0;
	$estado["mensaje"] = "No se pudo reinscribir al alumno";
}
/*Convierte los resultados a formato json*/
$resultadosJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $resultadosJson . ');';

mysql_close($con);


?>