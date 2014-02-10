
<?php
// conexion bd 
include("conex.php");
//formato JSON
//header('Content-type: application/json');

$idDocenteMateria= $_GET["docenteHorario"];
$numeroSemana= $_GET["numSemana"];
$fechaInicio= $_GET["fi"];
$fechaFin= $_GET["ff"];
$sesion= $_GET["sesiones"];
$numeroAlumnos= $_GET["numAlumnos"];
$pptt= $_GET["pt"];
$ppii= $_GET["pi"];
$ppdd= $_GET["pd"];
$ppcc= $_GET["pc"];
$sstt= $_GET["st"];
$ssii= $_GET["si"];
$ssdd= $_GET["sd"];
$sscc= $_GET["sc"];
$observaciones= $_GET["obser"];

$sql = "INSERT INTO plan_semanal (Numero_Semana, Fecha_Inicio, Fecha_Fin,Sesiones, Id_Materia_Docente, Numero_Alumnos, Primer_Tema, Primer_Inicio, Primer_Desarrollo, Primer_Cierre, Segundo_Tema, Segundo_Inicio, Segundo_Desarrollo, Segundo_Cierre, Observaciones) VALUES ('$numeroSemana','$fechaInicio', '$fechaFin', '$sesion','$idDocenteMateria', '$numeroAlumnos', '$pptt','$ppii', '$ppdd', '$ppcc','$sstt', '$ssii', '$ssdd','$sscc', '$observaciones')";

$result = mysql_query($sql) or die("Error de Consulta". mysql_error());


$estado["mensaje"]= "Nueva Actividad Creada";
//Convertir los resultados a formato json
$estadoJson = json_encode($estado);

/*Muestra el resultado en un formato que no da problemas de seguridad en browsers */
echo $_GET['jsoncallback'] . '(' . $estadoJson . ');';
?>