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

$records = array();
$cons;


global $estado;
global $rep;
inscribirUsuarioAlumno();
//inscribirUsuarioRepresentante();
inscribirUsuarioRepresentantePadre();
inscribirUsuarioRepresentanteMadre();
function inscribirUsuarioAlumno(){
	
	global $nomA;
	global $apA;
	global $cedA; 
	global $mailA;
	global $cedA;
	global $gen;
	global $tlf1A;
	global $dirA;
	global $rep;
	$sql = "INSERT INTO  usuario(Nombre,Apellido,Cedula,Email,Password,Id_Genero,Estado_Civil,Nacionalidad,Telefono,Direccion,Id_Rol_Usuario) VALUES('$nomA','$apA','$cedA','$mailA','$cedA','$gen','1','Venezolano','$tlf1A','$dirA','3')";
	$result = mysql_query($sql) or die ("Query error1: " . mysql_error());
	global $utlID;
	$utlID = mysql_insert_id();
	insertarRepresentanteEmergencia();
	insertarEstudiante($utlID);
}
function inscribirUsuarioRepresentantePadre(){
	global $pNom;
	global $pAp;
	global $pCed;
	global $mail2;
	global $pTlf1;
	global $dirA;
	global $pPro;
	global $pTrb;
	global $cedA;
	$pat = "Padre";
	$sql = "INSERT INTO  usuario(Nombre,Apellido,Cedula,Email,Password,Telefono,Direccion,Id_Rol_Usuario,Id_Genero,Estado_Civil,Nacionalidad) VALUES('$pNom','$pAp','$pCed','$mail2','$pCed','$pTlf1','$dirA','4','2','2','Venezolano')";
	$result = mysql_query($sql) or die ("Query error2: " . mysql_error());
	$repP = mysql_insert_id();
	$pa =  mysql_insert_id();
	global $asd;
	global $asd2;
	insertarRepresentante($pPro,$pTrb,$repP,$pat);
	representanteEstudiante($asd);

}
function inscribirUsuarioRepresentanteMadre(){
	global $mNom;
	global $mAp;
	global $mail3;
	global $mCed;
	global $mTlf1;
	global $dirA;
	global $cedA;
	global $mPro;
	global $mTrb;
	global $cedA;
	$pat = "Madre";
	$sql = "INSERT INTO  usuario(Nombre,Apellido,Cedula,Email,Password,Telefono,Direccion,Id_Rol_Usuario,Id_Genero,Estado_Civil,Nacionalidad) VALUES('$mNom','$mAp','$mCed','$mail3','$mCed','$mTlf1','$dirA','4','1','2','Venezolano')";
	$result = mysql_query($sql) or die ("Query error21: " . mysql_error());
	$repM = mysql_insert_id();
	//$ma =  mysql_insert_id();
	global $asd;
	global $asd2;
	insertarRepresentante($mPro,$mTrb,$repM,$pat);
	representanteEstudiante($asd);

}

function insertarEstudiante($ult){
	global $rep;
	global $yearA;
	global $aRel;
	global $ingre;
	global $repre;
	global $cedA;
	global $aMatP;
	global $aAler;
	global $aEnf;
	global $cedA; 
	global $lugarA;
	global $entiA;
	global $fechaA;
	global $esYear;
	global $aAct;
	global $aPlan;
	//global $rep;
	$sql = "INSERT INTO  estudiante(Id_Usuario,Id_Grado,Id_Religion,Entidad,Fecha_Nacimiento,Lugar_Nacimiento,Fecha_Ingreso,Id_Usuario_Estudiante,Materia_Pendiente,Alergia,Enfermedad,Id_Representante_Emergencia,Id_Year_Escolar,Id_Actividad,Plantel_Procendecia) VALUES
	 ('$ult','$yearA','$aRel','$entiA','$fechaA','$lugarA','$ingre','$cedA','$aMatP','$aAler','$aEnf','$rep','$esYear','$aAct','$aPlan')";
	$result = mysql_query($sql) or die ("Query error3: " . mysql_error());
	global $asd2;
	$asd2 = mysql_insert_id();
}

function insertarRepresentante($a,$b,$c,$d){
	$sql = "INSERT INTO representante (Id_Profesion,Lugar_Trabajo,Id_usuario_Representante,Rol_Paternidad) VALUES ('$a','$b','$c','$d')";
	$result = mysql_query($sql) or die ("Query error4: " . mysql_error());
	global $asd;
	$asd = mysql_insert_id();
}

function insertarRepresentanteEmergencia(){
	global $rep;
	global $eNom;
	global $eAp;
	global $eCed;
	global $eTlf1;
	$sql = "INSERT INTO representante_emergencia(Nombre,Apellido,Telefono,cedula) VALUES ('$eNom','$eAp','$eTlf1',$eCed)";
	$result = mysql_query($sql) or die ("Query error5: " . mysql_error());
	
	$rep = mysql_insert_id();

}
function representanteEstudiante($repres){
	//global $utlID;
	global $asd2;
	$sql = "INSERT INTO representante_estudiante(Id_Estudiante,Id_Representante) VALUES('$asd2','$repres')";
	$result = mysql_query($sql) or die ("Query error6: " . mysql_error());
}

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