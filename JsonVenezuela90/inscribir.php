<?php
//conexion a la BD
include("conex.php");
header('Content-type: application/json');

// Obtener Valores enviados desde el formulario

// Alumno
$nomA = $_GET["firsName"];
$apA = $_GET["lastName"];;
$fechaA = $_GET["birthDay"];
$cedA = $_GET["cI"];
$lugarA = $_GET["whereBorn"];
$entiA = $_GET["entity"];
$dirA = $_GET["addres"];
$tlf1A = $_GET["phone1"];
$tlf2A = $_GET["phone2"];
$yearA = $_GET["year"];
$aPlan = $_GET["plantel"];
$aMatP = $_GET["matP"];
$aAct = $_GET["actividad"];
$aRel = $_GET["religion"];
$aEnf = $_GET["sicking"];
$aAler = $_GET["alergy"];

// Padre
$pNom = $_GET["firsNameFather"];
$pAp = $_GET["lastNameFather"];
$pCed = $_GET["cIfather"];
$pPro = $_GET["profesion"];
$pTrb = $_GET["whereWork"];
$pTlf1 = $_GET["phone3"];
$pTlf2 = $_GET["phone4"];

//Mandre
$mNom = $_GET["firsNameMother"];
$mAp = $_GET["lastNameMother"];
$mCed = $_GET["cIMother"];
$mPro = $_GET["profesionMother"];
$mTrb = $_GET["whereWorkMother"];
$mTlf1 = $_GET["phone5"];
$mTlf2 = $_GET["phone6"];

//Emergencia
$eNom = $_GET["firsNameE"];
$eAp = $_GET["lastNameE"];
$eCed = $_GET["cIE"];
$eTlf1 = $_GET["phone7"];
$eTlf2 = $_GET["phone8"];

$records = array();
$cons;

// QUERY 
$sql2 = "INSERT INTO prueba2(id, a_nom, a_ap, a_fecha, a_lugar_n, a_entidad, a_ced, a_direcc, a_telf1, a_telf2, a_year, a_plantel, a_matP, a_actividad, a_religion, a_enf, a_aler, p_nom, p_ap, p_ced, p_pro, p_trb, p_tlf1, p_tlf2, m_nom, m_ap, m_ced, m_pro, m_trb, m_tlf1, m_tlf2, e_nom, e_ap, e_ced, e_tlf1, e_tlf2) VALUES(NULL, '$nomA','$apA','$fechaA','$lugarA','$entiA','$cedA','$dirA','$tlf1A','$tlf2A','$yearA','$aPlan','$aMatP','$aAct','$aRel','$aEnf','$aAler','$pNom','$pAp','$pCed','$pPro','$pTrb','$pTlf1','$pTlf2','$mNom','$mAp','$mCed','$mPro','$mTrb','$mTlf1','$mTlf2','$eNom','$eAp','$eCed','$eTlf1','$eTlf2')";

$result = mysql_query($sql2) or die ("Query error: " . mysql_error());

// Verifica que la consulta no tenga error
if(mysql_affected_rows() != -1){
	$estado["con"]=1;
	$estado["mensaje"] = "La inscripcion se ha realizado correctamente";
}
else{
	$estado["con"]=0;
	$estado["mensaje"] = "No se pudo inscribir al alumno";
}
/*Convierte los resultados a formato json*/
$resultadosJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $resultadosJson . ');';

mysql_close($con);


?>