<?php

//Conexión a base de datos
$server = "sql108.byetcluster.com";
$username = "n260m_14382178";
$password = "venezuel";
$database = "n260m_14382178_venezuela90";
$con = mysql_connect($server, $username, $password) or die ("Error al conectar: " . mysql_error());
mysql_query("SET NAMES 'utf8'");
mysql_select_db($database, $con);
?>