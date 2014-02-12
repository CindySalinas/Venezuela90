-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 12-02-2014 a las 22:28:51
-- Versión del servidor: 5.5.8
-- Versión de PHP: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `venezuela90`
--
CREATE DATABASE `venezuela90` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
USE `venezuela90`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividades`
--

CREATE TABLE IF NOT EXISTS `actividades` (
  `Id_Actividades` int(11) NOT NULL AUTO_INCREMENT,
  `Actividad` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  `Descripcion` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Actividades`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=7 ;

--
-- Volcar la base de datos para la tabla `actividades`
--

INSERT INTO `actividades` (`Id_Actividades`, `Actividad`, `Descripcion`) VALUES
(1, 'Bailer', ''),
(2, 'Deportes', ''),
(3, 'Gimnasia', ''),
(4, 'Musica', ''),
(5, 'Otros', ''),
(6, 'No ', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividades_planificacion_por_lapso`
--

CREATE TABLE IF NOT EXISTS `actividades_planificacion_por_lapso` (
  `Id_AP_Lapso` int(11) NOT NULL AUTO_INCREMENT,
  `Id_Planificacion_Por_Lapso` int(11) NOT NULL,
  `Objetivos_Especificos` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  `Contenido` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  `Estrategias_Metodologicas` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  `Recurso` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `Ponderacion` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `Tecnica_Evaluacion` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `Fecha` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_AP_Lapso`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=8 ;

--
-- Volcar la base de datos para la tabla `actividades_planificacion_por_lapso`
--

INSERT INTO `actividades_planificacion_por_lapso` (`Id_AP_Lapso`, `Id_Planificacion_Por_Lapso`, `Objetivos_Especificos`, `Contenido`, `Estrategias_Metodologicas`, `Recurso`, `Ponderacion`, `Tecnica_Evaluacion`, `Fecha`) VALUES
(1, 1, '3.8 y 3.9 Hablar acerca de las acciones en pasado', 'Talking about past', 'Was, were, what were you doing? I was doing something good', 'Explicacion, pronunciacion', '20%', 'Tecnica Evaluacion 1', '30/01/2014'),
(2, 1, '5.1 y 5.2', 'Contenido 2', 'Estrategias Metodologicas 2', 'Recursos 2', '15%', 'Tecnica Evaluacion 2', '10/02/2014'),
(3, 2, 'Objetivos Especificos 3', 'Contenido 3', 'Estrategias Metodologicas 3', 'Recursos 3', '10%', 'Tecnica Evaluacion 3', '25/02/2014'),
(4, 1, 'Objetivos Especificos 4', 'Contenido 4', 'Estrategias Metodologicas 4', 'Recursos 4', '15%', 'Tecnica Evaluacion 4', '05/06/2014'),
(5, 3, '', '', '', '', '', '', ''),
(6, 3, '', '', '', '', '', '', ''),
(7, 3, '11', '22', '33', '44', '66', '55', '77');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alergias`
--

CREATE TABLE IF NOT EXISTS `alergias` (
  `Id_Alergias` int(11) NOT NULL AUTO_INCREMENT,
  `Alergia` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Alergias`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

--
-- Volcar la base de datos para la tabla `alergias`
--


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calendario_escolar`
--

CREATE TABLE IF NOT EXISTS `calendario_escolar` (
  `Id_Calendario_Escolar` int(11) NOT NULL AUTO_INCREMENT,
  `Id_Tipo_Evento` int(11) NOT NULL,
  `Descripcion` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `Fecha` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`Id_Calendario_Escolar`),
  UNIQUE KEY `Fecha` (`Fecha`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=37 ;

--
-- Volcar la base de datos para la tabla `calendario_escolar`
--

INSERT INTO `calendario_escolar` (`Id_Calendario_Escolar`, `Id_Tipo_Evento`, `Descripcion`, `Fecha`) VALUES
(20, 7, 'ddd', '02/02/2014'),
(23, 7, 'asdf', '02/03/2014'),
(30, 143, 'Descripcion Evento', '03/06/2014'),
(32, 7, 'sad', '01/01/2014');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calendario_evento_grado`
--

CREATE TABLE IF NOT EXISTS `calendario_evento_grado` (
  `Id_Calendario_Evento_Grado` int(11) NOT NULL AUTO_INCREMENT,
  `Id_Grado_Calendario_Evento` int(11) NOT NULL,
  `Descripcion` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `Fecha` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`Id_Calendario_Evento_Grado`),
  UNIQUE KEY `Fecha` (`Fecha`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=18 ;

--
-- Volcar la base de datos para la tabla `calendario_evento_grado`
--

INSERT INTO `calendario_evento_grado` (`Id_Calendario_Evento_Grado`, `Id_Grado_Calendario_Evento`, `Descripcion`, `Fecha`) VALUES
(1, 5, 'actividades', '01/04/2014'),
(14, 2, 'Hola', '01/02/2014'),
(15, 3, 'Avtividad', '03/02/2014'),
(16, 1, 'AQW', '02/03/2014'),
(17, 1, 'Actividaddddd', '01/01/2014');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calificaciones`
--

CREATE TABLE IF NOT EXISTS `calificaciones` (
  `Id_Calificaciones` int(11) NOT NULL AUTO_INCREMENT,
  `Calificacion` int(11) NOT NULL,
  `Descripcion` varchar(5) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Calificaciones`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=21 ;

--
-- Volcar la base de datos para la tabla `calificaciones`
--

INSERT INTO `calificaciones` (`Id_Calificaciones`, `Calificacion`, `Descripcion`) VALUES
(1, 1, ''),
(2, 2, ''),
(3, 3, ''),
(4, 4, ''),
(5, 5, ''),
(6, 6, ''),
(7, 7, ''),
(8, 8, ''),
(9, 9, ''),
(10, 10, ''),
(11, 11, ''),
(12, 12, ''),
(13, 13, ''),
(14, 14, ''),
(15, 15, ''),
(16, 16, ''),
(17, 17, ''),
(18, 18, ''),
(19, 19, ''),
(20, 20, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cancelacion_mensualidades`
--

CREATE TABLE IF NOT EXISTS `cancelacion_mensualidades` (
  `id_registroCanM` int(11) NOT NULL AUTO_INCREMENT,
  `id_year_escolar` int(11) NOT NULL,
  `numero_factura` int(11) NOT NULL,
  `monto_BS` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `monto_txt` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `nombre_Pago` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `concepto_Pago` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `fecha` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `id_usuario_cancelacion_mensualidades` int(11) NOT NULL,
  PRIMARY KEY (`id_registroCanM`),
  UNIQUE KEY `numero_factura` (`numero_factura`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=61 ;

--
-- Volcar la base de datos para la tabla `cancelacion_mensualidades`
--

INSERT INTO `cancelacion_mensualidades` (`id_registroCanM`, `id_year_escolar`, `numero_factura`, `monto_BS`, `monto_txt`, `nombre_Pago`, `concepto_Pago`, `fecha`, `id_usuario_cancelacion_mensualidades`) VALUES
(52, 1, 10001, '1000', 'Mil Bs', 'Belkys Zambrano', 'Inscripcion', '03/02/2014', 1),
(53, 2, 10002, '1000', 'Mil Bs', 'Keily Salinas', 'Inscripcion', '03/02/2014', 2),
(54, 1, 10003, '640', 'Seiscientos', 'Cindy', 'Mensualidades', '03/02/2014', 1),
(55, 2, 10004, '1000', 'Mil Bs', 'No Se', 'Inscripcion', '03/02/2014', 7),
(56, 2, 10005, '640', 'Seiscientos', 'Keily Salinas', 'Mensualidades', '03/02/2014', 2),
(57, 2, 12345, '122', 'sdf', 'as', 'Inscripcion', '05/02/2014', 11),
(58, 2, 121212, '1234', 'asd', 'sda', 'Mensualidades', '05/02/2014', 11),
(59, 2, 432432, '1111', 'dsfsd', 'asdsa', 'Mensualidades', '05/02/2014', 7),
(60, 2, 2147483647, '1000', 'añi ción', 'ñoño', 'Mensualidades', '07/02/2014', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `desarrollo`
--

CREATE TABLE IF NOT EXISTS `desarrollo` (
  `Id_Desarrollo` int(11) NOT NULL AUTO_INCREMENT,
  `Descripcion_Desarrollo` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Desarrollo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

--
-- Volcar la base de datos para la tabla `desarrollo`
--


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `dias`
--

CREATE TABLE IF NOT EXISTS `dias` (
  `Id_Dia` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre_Dia` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`Id_Dia`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=6 ;

--
-- Volcar la base de datos para la tabla `dias`
--

INSERT INTO `dias` (`Id_Dia`, `Nombre_Dia`) VALUES
(1, 'Lunes'),
(2, 'Martes'),
(3, 'Miercoles'),
(4, 'Jueves'),
(5, 'Viernes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `docente`
--

CREATE TABLE IF NOT EXISTS `docente` (
  `Id_Docente` int(11) NOT NULL AUTO_INCREMENT,
  `Id_Usuario_Docente` int(11) NOT NULL,
  `Descripcion` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  `fecha_nacimiento` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `lugar_nacimiento` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Docente`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=10 ;

--
-- Volcar la base de datos para la tabla `docente`
--

INSERT INTO `docente` (`Id_Docente`, `Id_Usuario_Docente`, `Descripcion`, `fecha_nacimiento`, `lugar_nacimiento`) VALUES
(1, 5, 'Una gringa bien chevere de un video', '18/01/2014', 'New York'),
(2, 4, 'My brother xd', '11/03/1993', 'San Diego'),
(3, 2, 'Keilyyyyyyy', '24/04/1991', 'Prebo'),
(8, 101, '', '1985-02-14', 'en ccs'),
(9, 100, '', '2014-02-04', 'dasdasd');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `enfermedad`
--

CREATE TABLE IF NOT EXISTS `enfermedad` (
  `Id_Enfermedad` int(11) NOT NULL AUTO_INCREMENT,
  `Enfermedad` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Enfermedad`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

--
-- Volcar la base de datos para la tabla `enfermedad`
--


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estado_civil`
--

CREATE TABLE IF NOT EXISTS `estado_civil` (
  `id_Edo_civil` int(11) NOT NULL AUTO_INCREMENT,
  `Edo_Civil` varchar(30) COLLATE utf8_spanish2_ci NOT NULL,
  `Descripcion` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`id_Edo_civil`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=3 ;

--
-- Volcar la base de datos para la tabla `estado_civil`
--

INSERT INTO `estado_civil` (`id_Edo_civil`, `Edo_Civil`, `Descripcion`) VALUES
(1, 'Solter@', ''),
(2, 'Casad@', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiante`
--

CREATE TABLE IF NOT EXISTS `estudiante` (
  `Id_Estudiante` int(11) NOT NULL AUTO_INCREMENT,
  `Id_Usuario` int(11) NOT NULL,
  `Id_Grado` int(11) NOT NULL,
  `Id_Seccion` int(11) NOT NULL,
  `Id_Religion` int(11) NOT NULL,
  `Id_Year_Escolar` int(11) NOT NULL,
  `Entidad` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `Fecha_Nacimiento` varchar(11) COLLATE utf8_spanish2_ci NOT NULL,
  `Lugar_Nacimiento` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `Fecha_Ingreso` varchar(11) COLLATE utf8_spanish2_ci NOT NULL,
  `Materia_Pendiente` varchar(5) COLLATE utf8_spanish2_ci NOT NULL,
  `Id_Representante_Emergencia` int(11) NOT NULL,
  `Id_Usuario_Estudiante` int(11) NOT NULL,
  `Alergia` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `Enfermedad` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `Id_Actividad` int(11) NOT NULL,
  `Plantel_Procendecia` varchar(150) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Estudiante`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=29 ;

--
-- Volcar la base de datos para la tabla `estudiante`
--

INSERT INTO `estudiante` (`Id_Estudiante`, `Id_Usuario`, `Id_Grado`, `Id_Seccion`, `Id_Religion`, `Id_Year_Escolar`, `Entidad`, `Fecha_Nacimiento`, `Lugar_Nacimiento`, `Fecha_Ingreso`, `Materia_Pendiente`, `Id_Representante_Emergencia`, `Id_Usuario_Estudiante`, `Alergia`, `Enfermedad`, `Id_Actividad`, `Plantel_Procendecia`) VALUES
(1, 7, 3, 3, 1, 2, 'Morro II', '1999-04-11', 'San Diegos', '', 'NO', 1, 26580756, '', '', 3, 'U.E Santuario'),
(2, 8, 3, 3, 1, 2, 'Morro II', '1999-04-11', 'San Diegos', '', 'NO', 2, 26581529, '', '', 3, 'U.E Santuario'),
(3, 9, 3, 3, 1, 2, 'Morro II', '1999-04-11', 'San Diegos', '', 'NO', 3, 26634620, '', '', 3, 'U.E Santuario'),
(4, 10, 3, 3, 1, 2, 'Morro II', '1999-04-11', 'San Diegos', '', 'NO', 4, 26642123, '', '', 3, 'U.E Santuario'),
(5, 11, 3, 3, 1, 2, 'Morro II', '1999-04-11', 'San Diegos', '', 'NO', 5, 26917254, '', '', 3, 'U.E Santuario'),
(28, 92, 5, 0, 1, 2, 'Morro II', '1999-04-11', 'San Diegos', '2014-02-09', 'SI', 20, 27014949, '', '', 4, 'U.E Santuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiante_alergias`
--

CREATE TABLE IF NOT EXISTS `estudiante_alergias` (
  `Id_Estudiante_Alergias` int(11) NOT NULL AUTO_INCREMENT,
  `Id_Estudiante` int(11) NOT NULL,
  `Id_Alergias` int(11) NOT NULL,
  `Descripcion` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Estudiante_Alergias`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

--
-- Volcar la base de datos para la tabla `estudiante_alergias`
--


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiante_enfermedad`
--

CREATE TABLE IF NOT EXISTS `estudiante_enfermedad` (
  `Id_Enfermedad_Estudiante` int(11) NOT NULL AUTO_INCREMENT,
  `Id_Enfermedad` int(11) NOT NULL,
  `Id_Estudiante` int(11) NOT NULL,
  `Descripcion` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Enfermedad_Estudiante`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

--
-- Volcar la base de datos para la tabla `estudiante_enfermedad`
--


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiante_mat_doc`
--

CREATE TABLE IF NOT EXISTS `estudiante_mat_doc` (
  `id_estudiante_mat_doc` int(11) NOT NULL AUTO_INCREMENT,
  `id_est` int(11) NOT NULL,
  `id_mat_docente` int(11) NOT NULL,
  `Descripcion` varchar(100) COLLATE utf8_spanish2_ci DEFAULT NULL,
  PRIMARY KEY (`id_estudiante_mat_doc`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=6 ;

--
-- Volcar la base de datos para la tabla `estudiante_mat_doc`
--

INSERT INTO `estudiante_mat_doc` (`id_estudiante_mat_doc`, `id_est`, `id_mat_docente`, `Descripcion`) VALUES
(1, 1, 1, NULL),
(2, 2, 1, NULL),
(3, 3, 1, NULL),
(4, 4, 1, NULL),
(5, 5, 1, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiante_materia_docente_nota`
--

CREATE TABLE IF NOT EXISTS `estudiante_materia_docente_nota` (
  `Id_Estudiante_Materia_Docente_Nota` int(11) NOT NULL AUTO_INCREMENT,
  `Id_Estudiante` int(11) NOT NULL,
  `Id_Horario_Materia` int(11) NOT NULL,
  `Id_Lapso` int(11) NOT NULL,
  `Id_Calificacion` int(11) NOT NULL,
  `Porcentaje` varchar(5) COLLATE utf8_spanish_ci NOT NULL,
  `Puntos_Obtenidos` int(11) NOT NULL,
  `Descripcion` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`Id_Estudiante_Materia_Docente_Nota`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=3 ;

--
-- Volcar la base de datos para la tabla `estudiante_materia_docente_nota`
--

INSERT INTO `estudiante_materia_docente_nota` (`Id_Estudiante_Materia_Docente_Nota`, `Id_Estudiante`, `Id_Horario_Materia`, `Id_Lapso`, `Id_Calificacion`, `Porcentaje`, `Puntos_Obtenidos`, `Descripcion`) VALUES
(2, 5, 10, 0, 10, '20', 2, 'Examen 1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiante_prestamo`
--

CREATE TABLE IF NOT EXISTS `estudiante_prestamo` (
  `id_e_prestamo` int(11) NOT NULL AUTO_INCREMENT,
  `cedula` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `grado` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `id_libro` int(11) NOT NULL,
  `id_prestamo_libro` int(11) NOT NULL,
  `dateP` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`id_e_prestamo`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=19 ;

--
-- Volcar la base de datos para la tabla `estudiante_prestamo`
--

INSERT INTO `estudiante_prestamo` (`id_e_prestamo`, `cedula`, `nombre`, `grado`, `id_libro`, `id_prestamo_libro`, `dateP`) VALUES
(1, '12345', 'Manuel', '4', 8, 0, '16/04/2013'),
(2, '222221', 'Leonel', '1', 19, 0, '17/04/2013'),
(6, '', '', '', 9, 0, '19/04/2013'),
(12, '21029953', 'Cindy Salinas', '5', 8, 0, '20/04/2013'),
(13, '21029953', 'Cindy Salinas', '5', 19, 0, '21/04/2013'),
(14, 'aaaaaaaaaa', '', '', 8, 0, '14/05/2014'),
(18, '0123456', 'Manuel Abrante', '', 8, 0, '14/05/2014');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fecha`
--

CREATE TABLE IF NOT EXISTS `fecha` (
  `Id_Fecha` int(11) NOT NULL AUTO_INCREMENT,
  `Fecha_Inicio` varchar(15) COLLATE utf8_spanish2_ci NOT NULL,
  `Fecha_Fin` varchar(15) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Fecha`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

--
-- Volcar la base de datos para la tabla `fecha`
--


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `foros`
--

CREATE TABLE IF NOT EXISTS `foros` (
  `Id_Foro` int(11) NOT NULL AUTO_INCREMENT,
  `Id_Usuario` int(11) NOT NULL,
  `Nombre_Tema` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `Tema` varchar(500) COLLATE utf8_spanish_ci NOT NULL,
  `Fecha` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Hora` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`Id_Foro`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=68 ;

--
-- Volcar la base de datos para la tabla `foros`
--

INSERT INTO `foros` (`Id_Foro`, `Id_Usuario`, `Nombre_Tema`, `Tema`, `Fecha`, `Hora`) VALUES
(29, 21029953, 'Primer Foro', 'Mensaje Primer Foro', 'Jueves, 9 de Enero de 2014', '1:45:47pm'),
(30, 21029953, 'Segundo Foro', '<b>Mensaje Segundo Foro</b>', 'Jueves, 9 de Enero de 2014', '3:15:29pm'),
(31, 21029953, 'Prueba Foro', '<b>Texto en negrita.....</b><i>texto en cursiva........</i><u>texto subrayadooo..!!!!</u>', 'Jueves, 9 de Enero de 2014', '5:18:08pm'),
(32, 21029953, 'Prueba Foro Imagenes', 'Imagen<div><img src="http://i.imgur.com/yYnsxDR.png" width="450"><br></div>', 'Jueves, 9 de Enero de 2014', '5:20:15pm'),
(33, 21029953, 'Foro Docente', 'Mensaje Docente', 'Viernes, 7 de Febrero de 2014', '1:25:02pm'),
(34, 21029953, 'Foro Alumno', 'Foro Alumno 222', 'Viernes, 7 de Febrero de 2014', '4:56:54pm'),
(67, 21029953, 'Hola Vale', 'Jo', 'Lunes, 10 de Febrero de 2014', '9:27:54am');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `foto_perfil_usuario`
--

CREATE TABLE IF NOT EXISTS `foto_perfil_usuario` (
  `Id_Foto_Perfil` int(11) NOT NULL AUTO_INCREMENT,
  `Ruta_Foto_Perfil` varchar(200) COLLATE ucs2_spanish2_ci NOT NULL,
  `Descripcion` varchar(40) COLLATE ucs2_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Foto_Perfil`)
) ENGINE=InnoDB DEFAULT CHARSET=ucs2 COLLATE=ucs2_spanish2_ci AUTO_INCREMENT=1 ;

--
-- Volcar la base de datos para la tabla `foto_perfil_usuario`
--


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genero`
--

CREATE TABLE IF NOT EXISTS `genero` (
  `Id_Genero` int(11) NOT NULL AUTO_INCREMENT,
  `Genero` varchar(30) COLLATE utf8_spanish2_ci NOT NULL,
  `Descripcion` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Genero`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=3 ;

--
-- Volcar la base de datos para la tabla `genero`
--

INSERT INTO `genero` (`Id_Genero`, `Genero`, `Descripcion`) VALUES
(1, 'Femenino', ''),
(2, 'Masculino', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grado`
--

CREATE TABLE IF NOT EXISTS `grado` (
  `Id_Grado` int(11) NOT NULL AUTO_INCREMENT,
  `Grado` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`Id_Grado`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=6 ;

--
-- Volcar la base de datos para la tabla `grado`
--

INSERT INTO `grado` (`Id_Grado`, `Grado`) VALUES
(1, '1er Año'),
(2, '2do Año'),
(3, '3er Año'),
(4, '4to Año'),
(5, '5to Año');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grado_seccion`
--

CREATE TABLE IF NOT EXISTS `grado_seccion` (
  `id_grado_secc` int(11) NOT NULL AUTO_INCREMENT,
  `id_grado` int(11) NOT NULL,
  `id_seccion` int(11) NOT NULL,
  PRIMARY KEY (`id_grado_secc`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

--
-- Volcar la base de datos para la tabla `grado_seccion`
--


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horario`
--

CREATE TABLE IF NOT EXISTS `horario` (
  `Id_Horario` int(11) NOT NULL AUTO_INCREMENT,
  `Hora_Inicio` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `Hora_Fin` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Horario`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=5 ;

--
-- Volcar la base de datos para la tabla `horario`
--

INSERT INTO `horario` (`Id_Horario`, `Hora_Inicio`, `Hora_Fin`) VALUES
(1, '07:15am', '08:35am'),
(2, '08:50am', '10:05am'),
(3, '10:25am', '11:45am'),
(4, '11:50am', '01:00pm');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horario_materia`
--

CREATE TABLE IF NOT EXISTS `horario_materia` (
  `Id_Horario_Materia` int(11) NOT NULL AUTO_INCREMENT,
  `Id_Materia` int(11) NOT NULL,
  `Id_Docente` int(11) NOT NULL,
  `Id_Horario` int(11) NOT NULL,
  `Id_Year_Escolar_MateriaDocente` int(11) NOT NULL,
  `Id_Grado` int(11) NOT NULL,
  `Id_Dia_Horario_Materia` int(11) NOT NULL,
  `Descripcion` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Horario_Materia`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=14 ;

--
-- Volcar la base de datos para la tabla `horario_materia`
--

INSERT INTO `horario_materia` (`Id_Horario_Materia`, `Id_Materia`, `Id_Docente`, `Id_Horario`, `Id_Year_Escolar_MateriaDocente`, `Id_Grado`, `Id_Dia_Horario_Materia`, `Descripcion`) VALUES
(1, 1, 2, 1, 2, 1, 1, 'Prof Castellano'),
(3, 8, 3, 3, 2, 1, 3, 'Prof Ingles'),
(10, 1, 3, 1, 2, 3, 1, 'Profe'),
(13, 5, 3, 2, 2, 5, 3, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horario_salones`
--

CREATE TABLE IF NOT EXISTS `horario_salones` (
  `Id_Horario_Salones` int(11) NOT NULL AUTO_INCREMENT,
  `Id_Horario` int(11) NOT NULL,
  `Id_Salon` int(11) NOT NULL,
  `Id_Asignatura` int(11) NOT NULL,
  `Id_Year` int(11) NOT NULL,
  `Descripcion` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `Id_Dia` int(11) NOT NULL,
  PRIMARY KEY (`Id_Horario_Salones`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=7 ;

--
-- Volcar la base de datos para la tabla `horario_salones`
--

INSERT INTO `horario_salones` (`Id_Horario_Salones`, `Id_Horario`, `Id_Salon`, `Id_Asignatura`, `Id_Year`, `Descripcion`, `Id_Dia`) VALUES
(1, 1, 1, 1, 2, '', 1),
(2, 1, 1, 1, 2, '', 4),
(3, 2, 1, 2, 2, '', 2),
(5, 4, 1, 4, 2, '', 4),
(6, 4, 1, 2, 2, '', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ie`
--

CREATE TABLE IF NOT EXISTS `ie` (
  `Id_IE` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre_Id` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_IE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

--
-- Volcar la base de datos para la tabla `ie`
--


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lapso`
--

CREATE TABLE IF NOT EXISTS `lapso` (
  `Id_Lapso` int(11) NOT NULL AUTO_INCREMENT,
  `Lapso` varchar(15) COLLATE utf8_spanish_ci NOT NULL,
  `Descripcion` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`Id_Lapso`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=4 ;

--
-- Volcar la base de datos para la tabla `lapso`
--

INSERT INTO `lapso` (`Id_Lapso`, `Lapso`, `Descripcion`) VALUES
(1, 'I', 'Primer Lapso'),
(2, 'II', 'Segundo Lapso'),
(3, 'III', 'Tercer Lapso');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lapso_plans`
--

CREATE TABLE IF NOT EXISTS `lapso_plans` (
  `Id_Lapso_PS` int(11) NOT NULL AUTO_INCREMENT,
  `Id_Plan_Semanal` int(11) NOT NULL,
  `Id_Lapso` int(11) NOT NULL,
  `Descripcion` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Lapso_PS`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

--
-- Volcar la base de datos para la tabla `lapso_plans`
--


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE IF NOT EXISTS `libros` (
  `id_libro` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_libro` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `autor_libro` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `materia_libro` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `year_libro` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `edit_libro` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `edicion_libro` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `cantidad_libro` int(10) NOT NULL,
  PRIMARY KEY (`id_libro`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=22 ;

--
-- Volcar la base de datos para la tabla `libros`
--

INSERT INTO `libros` (`id_libro`, `nombre_libro`, `autor_libro`, `materia_libro`, `year_libro`, `edit_libro`, `edicion_libro`, `cantidad_libro`) VALUES
(8, 'Caballero Armadura Oxidada', 'Robert Fisher', 'Castellano', '1989', 'Ediciones Obelisco', 'Pepito Perez', 3),
(9, 'Calculo Integral', 'Larson', 'Matematica', '2009', 'Mc Graw Hill', 'Bruce Edwards', 4),
(19, 'Como Cocinar', 'Manuel', 'General', '2002', 'Abrante C.A', 'Manuel', 0),
(20, 'asdasd', 'asd', 'asd', '1234', 'asdasd', 'asd', 0),
(21, 'sdf', 'sdf', 'ghj', 'gfh', 'jkl', 'dfg', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lista_estudiantes`
--

CREATE TABLE IF NOT EXISTS `lista_estudiantes` (
  `id_Lista_Estudio` int(11) NOT NULL AUTO_INCREMENT,
  `id_lista` int(11) NOT NULL,
  `cedula` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `Descripcion` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`id_Lista_Estudio`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=53 ;

--
-- Volcar la base de datos para la tabla `lista_estudiantes`
--

INSERT INTO `lista_estudiantes` (`id_Lista_Estudio`, `id_lista`, `cedula`, `Descripcion`) VALUES
(27, 2, '26580756', ''),
(29, 2, '26581529', ''),
(30, 2, '26634620', ''),
(31, 2, '26642123', ''),
(32, 2, '26917254', ''),
(34, 18, '21029954', ''),
(35, 18, '22224963', ''),
(36, 18, '01234567', ''),
(38, 26, '26581529', ''),
(39, 26, '21029953', ''),
(40, 26, '22224963', ''),
(41, 26, '01234567', ''),
(42, 26, '76543210', ''),
(43, 26, '26917254', ''),
(48, 18, '26917254', ''),
(49, 28, '26917254', ''),
(50, 27, '26917254', ''),
(51, 18, '26634620', ''),
(52, 18, '26634620', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `listas`
--

CREATE TABLE IF NOT EXISTS `listas` (
  `id_lista` int(11) NOT NULL AUTO_INCREMENT,
  `id_tipo_lista` int(11) NOT NULL,
  `nombre_Lista` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `id_grado` int(11) NOT NULL,
  `id_seccion` int(11) NOT NULL,
  `fecha_creacion` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `Descripcion` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`id_lista`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=39 ;

--
-- Volcar la base de datos para la tabla `listas`
--

INSERT INTO `listas` (`id_lista`, `id_tipo_lista`, `nombre_Lista`, `id_grado`, `id_seccion`, `fecha_creacion`, `Descripcion`) VALUES
(2, 2, 'Aula de Clase 7mo', 1, 0, '2014-01-15', ''),
(3, 3, 'Lista Prueba Nueva', 2, 0, '2014-01-15', ''),
(18, 3, 'Nueva Lista Prueba 2', 1, 2, '2014-01-16', ''),
(26, 1, 'Materias Pendiente', 2, 2, '2014-01-30', ''),
(38, 3, 'Prueba Fecha 2', 0, 0, '2014-01-30', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materia`
--

CREATE TABLE IF NOT EXISTS `materia` (
  `Id_Materia` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre_Materia` varchar(40) COLLATE utf8_spanish2_ci NOT NULL,
  `Descripcion` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Materia`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=11 ;

--
-- Volcar la base de datos para la tabla `materia`
--

INSERT INTO `materia` (`Id_Materia`, `Nombre_Materia`, `Descripcion`) VALUES
(1, 'Castellano', ''),
(2, 'Educacion para la Salud', ''),
(3, 'Fisica', ''),
(4, 'Geografia de Venezuela', ''),
(5, 'Ingles', ''),
(6, 'Historia Universal', ''),
(7, 'Historia Venezuela', ''),
(8, 'Educacion para la Salud', ''),
(9, 'Matematica', ''),
(10, 'Quimica', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materia_docente`
--

CREATE TABLE IF NOT EXISTS `materia_docente` (
  `Id_Materia_Docente` int(11) NOT NULL AUTO_INCREMENT,
  `Id_Docente` int(11) NOT NULL,
  `Id_Materia` int(11) NOT NULL,
  `Id_Year_Escolar_MateriaDocente` int(11) NOT NULL,
  `Descripcion` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `Id_Grado` int(11) NOT NULL,
  PRIMARY KEY (`Id_Materia_Docente`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=4 ;

--
-- Volcar la base de datos para la tabla `materia_docente`
--

INSERT INTO `materia_docente` (`Id_Materia_Docente`, `Id_Docente`, `Id_Materia`, `Id_Year_Escolar_MateriaDocente`, `Descripcion`, `Id_Grado`) VALUES
(1, 2, 1, 2, 'Prof Castellano', 1),
(2, 1, 10, 2, 'Prof Quimica', 3),
(3, 3, 5, 2, 'Prof Ingles', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materia_docente_grado`
--

CREATE TABLE IF NOT EXISTS `materia_docente_grado` (
  `Id_Materia_Docente_Grado` int(11) NOT NULL AUTO_INCREMENT,
  `Id_Materia_Docente` int(11) NOT NULL,
  `Id_Grado` int(11) NOT NULL,
  `Descripcion` varchar(150) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`Id_Materia_Docente_Grado`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=5 ;

--
-- Volcar la base de datos para la tabla `materia_docente_grado`
--

INSERT INTO `materia_docente_grado` (`Id_Materia_Docente_Grado`, `Id_Materia_Docente`, `Id_Grado`, `Descripcion`) VALUES
(1, 1, 1, 'Castellano Primer Año'),
(2, 2, 3, 'Quimica Tercer Año'),
(3, 3, 2, 'Ingles Segundo Año'),
(4, 1, 5, 'Castellano Quinto Año');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `material_estudio`
--

CREATE TABLE IF NOT EXISTS `material_estudio` (
  `id_material` int(11) NOT NULL AUTO_INCREMENT,
  `material` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `id_seccion` int(11) NOT NULL,
  `Id_Horario_Materia` int(11) NOT NULL,
  PRIMARY KEY (`id_material`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=5 ;

--
-- Volcar la base de datos para la tabla `material_estudio`
--

INSERT INTO `material_estudio` (`id_material`, `material`, `id_seccion`, `Id_Horario_Materia`) VALUES
(3, 'Archivo/Asignacion2-TeoriaDeLaInformacion.docx', 1, 10),
(4, 'Archivo/Asignacion2-TeoriaDeLaInformacion.docx	', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes`
--

CREATE TABLE IF NOT EXISTS `mensajes` (
  `Id_Mensaje` int(11) NOT NULL AUTO_INCREMENT,
  `Correo_Remitente` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Correo_Destinatario` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Asunto_Mensaje` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `Mensaje` varchar(1000) COLLATE utf8_spanish_ci NOT NULL,
  `Fecha` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Hora` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Favorito` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `Leido` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`Id_Mensaje`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=153 ;

--
-- Volcar la base de datos para la tabla `mensajes`
--

INSERT INTO `mensajes` (`Id_Mensaje`, `Correo_Remitente`, `Correo_Destinatario`, `Asunto_Mensaje`, `Mensaje`, `Fecha`, `Hora`, `Favorito`, `Leido`) VALUES
(60, 'cindysalinas15@gmail.com', 'cindysalinas15@gmail.com', 'Asunto 1', 'Mensaje 1', 'Domingo, 12 de Enero de 2014', '7:04:16pm', 'false', 'true'),
(61, 'cindysalinas15@gmail.com', 'cindysalinas15@gmail.com', 'Asunto 2', 'Mensaje 2', 'Domingo, 12 de Enero de 2014', '7:05:35pm', 'false', 'true'),
(62, 'cindysalinas15@gmail.com', 'keily424@hotmail.com', 'ausn', 'sakoj', 'j', 'kl', 'false', 'true'),
(64, 'keily424@hotmail.com', 'keily424@hotmail.com', 'Asunt', 'jasasdsfcv d', 'Domingo, 12 de Enero de 2014', '7:45:09pm', 'false', 'true'),
(65, 'abrantemanuel@gmail.com', 'keily424@hotmail.com', 'Respuesta solicitud [Constancia de Inscripcion]', 'Respondiendo a la solicitud de asdjkasdas dasd', 'Jueves, 16 de Enero de 2014', '12:21:22am', 'false', 'false'),
(66, 'abrantemanuel@gmail.com', 'abrantemanuel@gmail.com', 'Respuesta solicitud [Constancia de Notas]', 'Respuesta a la solictud de algo asdfsdfdsf', 'Jueves, 16 de Enero de 2014', '12:22:20am', 'false', 'false'),
(77, 'cindysalinas15@gmail.com', 'cindysalinas15@gmail.com', 'men', '<center>U.E "VENEZUELA 90" ----- Valencia, 05 de Febredo de 2014</center>\n</br>\n<center>Valencia - Edo. Carabobo</center>\n</br>\nSr. Representante de <u>Cindy Yarimar Salinas Zambrano</u> curso <u>1er Año</u> sección <u>"A"</u> a través de la presente se le notifica el vencimiento de la (as) siguientes mensualidades: <u>Enero, Febrero, Marzo</u>. Sirvase pasar por la administración.\n</br></br>\n<b>NOTA</b>\n</br>\n-- El compromiso adquirido es cancelar <b>los primeros CINCO (5) días de cada mes.</b>\n</br>\n -- Una vez vencido el plazo del segundo aviso de cobro, se tomarán las medidas pertinentes.\n</br>\n-- Se le agradece responder al mensaje con la mayor prontitud posible.', 'Miercoles, 5 de Febrero de 2014', '3:14:52pm', 'false', 'true'),
(78, 'cindysalinas15@gmail.com', 'cindysalinas15@gmail.com', 'otro', '<center>U.E "VENEZUELA 90" ----- Valencia, 05 de Febredo de 2014</center></br><center>Valencia - Edo. Carabobo</center></br>Sr. Representante de <u>Cindy Yarimar Salinas Zambrano</u> curso <u>1er Año</u> sección <u>"A"</u> a través de la presente se le notifica el vencimiento de la (as) siguientes mensualidades: <u>Enero, Febrero, Marzo</u>. Sirvase pasar por la administración.</br></br><b>NOTA</b></br>-- El compromiso adquirido es cancelar <b>los primeros CINCO (5) días de cada mes.</b></br>-- Una vez vencido el plazo del segundo aviso de cobro, se tomarán las medidas pertinentes.</br>-- Se le agradece responder al mensaje con la mayor prontitud posible.', 'Miercoles, 5 de Febrero de 2014', '3:16:43pm', 'false', 'true'),
(150, 'cindysalinas15@gmail.com', 'keily424@hotmail.com', 'Hola', 'Otra Vez', 'Lunes, 10 de Febrero de 2014', '8:52:18am', 'false', 'true'),
(151, 'keily424@hotmail.com', 'keily424@hotmail.com', 'Men', 'MEN 2', 'Lunes, 10 de Febrero de 2014', '8:58:55am', 'false', 'true'),
(152, 'herradajavier@venezuela90.com', 'herradajavier@venezuela90.com', 'a', 's', 'Lunes, 10 de Febrero de 2014', '9:43:25am', 'false', 'true');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensualidad_pagada`
--

CREATE TABLE IF NOT EXISTS `mensualidad_pagada` (
  `id_MP` int(11) NOT NULL AUTO_INCREMENT,
  `mesPagado` varchar(20) COLLATE utf32_spanish2_ci NOT NULL,
  `id_RegistroCanM` int(11) NOT NULL,
  PRIMARY KEY (`id_MP`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf32 COLLATE=utf32_spanish2_ci AUTO_INCREMENT=51 ;

--
-- Volcar la base de datos para la tabla `mensualidad_pagada`
--

INSERT INTO `mensualidad_pagada` (`id_MP`, `mesPagado`, `id_RegistroCanM`) VALUES
(37, 'Septiembre', 54),
(38, 'Octubre', 54),
(39, 'Septiembre', 56),
(40, 'Octubre', 56),
(41, 'Noviembre', 56),
(42, 'Septiembre', 58),
(43, 'Octubre', 58),
(44, 'Noviembre', 58),
(45, 'Diciembre', 58),
(46, 'Septiembre', 59),
(47, 'Octubre', 59),
(48, 'Noviembre', 59),
(49, 'Diciembre', 59),
(50, 'Enero', 59);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `noticias`
--

CREATE TABLE IF NOT EXISTS `noticias` (
  `Id_Noticia` int(11) NOT NULL AUTO_INCREMENT,
  `Id_Usuario_Creador` int(11) NOT NULL,
  `Titulo_Noticia` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `Noticia` varchar(300) COLLATE utf8_spanish_ci NOT NULL,
  `Imagen_Noticia` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `Fecha_Noticia` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Hora_Noticia` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`Id_Noticia`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=27 ;

--
-- Volcar la base de datos para la tabla `noticias`
--

INSERT INTO `noticias` (`Id_Noticia`, `Id_Usuario_Creador`, `Titulo_Noticia`, `Noticia`, `Imagen_Noticia`, `Fecha_Noticia`, `Hora_Noticia`) VALUES
(19, 21029953, 'Modificar xD', 'modificando', '../images/user.png', 'Viernes, 10 de Enero de 2014', '10:39:02pm'),
(22, 21029953, 'otroModificar', 'Cont 2', '../images/user.png', 'Viernes, 10 de Enero de 2014', '10:45:42pm'),
(23, 21029953, 'dfdggfhff11', 'a', '../images/user.png', 'Viernes, 10 de Enero de 2014', '10:46:15pm'),
(24, 21029953, 'Nueva Noticia', 'modificar', '../images/user.png', 'Domingo, 12 de Enero de 2014', '9:46:08pm'),
(25, 21029953, 'NoticiÃ³n', 'Ã‘oÃ±o', '../images/user.png', 'Sabado, 1 de Febrero de 2014', '12:12:40am'),
(26, 21029953, 'ón', 'año', '../images/user.png', 'Viernes, 7 de Febrero de 2014', '11:50:32pm');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plan_semanal`
--

CREATE TABLE IF NOT EXISTS `plan_semanal` (
  `Id_Plan_Semanal` int(11) NOT NULL AUTO_INCREMENT,
  `Numero_Semana` int(11) NOT NULL,
  `Fecha_Inicio` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `Fecha_Fin` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `Sesiones` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `Id_Materia_Docente` int(11) NOT NULL,
  `Numero_Alumnos` int(11) NOT NULL,
  `Primer_Tema` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `Primer_Inicio` varchar(300) COLLATE utf8_spanish2_ci NOT NULL,
  `Primer_Desarrollo` varchar(300) COLLATE utf8_spanish2_ci NOT NULL,
  `Primer_Cierre` varchar(300) COLLATE utf8_spanish2_ci NOT NULL,
  `Segundo_Tema` varchar(300) COLLATE utf8_spanish2_ci NOT NULL,
  `Segundo_Inicio` varchar(300) COLLATE utf8_spanish2_ci NOT NULL,
  `Segundo_Desarrollo` varchar(300) COLLATE utf8_spanish2_ci NOT NULL,
  `Segundo_Cierre` varchar(300) COLLATE utf8_spanish2_ci NOT NULL,
  `Observaciones` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Plan_Semanal`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=6 ;

--
-- Volcar la base de datos para la tabla `plan_semanal`
--

INSERT INTO `plan_semanal` (`Id_Plan_Semanal`, `Numero_Semana`, `Fecha_Inicio`, `Fecha_Fin`, `Sesiones`, `Id_Materia_Docente`, `Numero_Alumnos`, `Primer_Tema`, `Primer_Inicio`, `Primer_Desarrollo`, `Primer_Cierre`, `Segundo_Tema`, `Segundo_Inicio`, `Segundo_Desarrollo`, `Segundo_Cierre`, `Observaciones`) VALUES
(1, 1, '13/01/2014', '17/01/2014', '2', 1, 30, 'Tema 1 - Castellano 1', 'Inicio 1', 'Desarrollo 1', 'Cierre 1', 'Tema 2 - Castellano 2', 'Inicio 2', 'Desarrollo 2', 'Cierre 2', 'Observacion 1'),
(5, 1, '2014-02-03', '2014-02-11', '1', 3, 11, '1', '2', '3', '4', '5', '6', '7', '8', '9');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `planificacion_por_lapso`
--

CREATE TABLE IF NOT EXISTS `planificacion_por_lapso` (
  `Id_Planificacion_Por_Lapso` int(11) NOT NULL AUTO_INCREMENT,
  `Id_Materia_Docente` int(11) NOT NULL,
  `Id_Lapso` int(11) NOT NULL,
  `Id_Year` int(11) NOT NULL,
  `Mencion` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Planificacion_Por_Lapso`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=4 ;

--
-- Volcar la base de datos para la tabla `planificacion_por_lapso`
--

INSERT INTO `planificacion_por_lapso` (`Id_Planificacion_Por_Lapso`, `Id_Materia_Docente`, `Id_Lapso`, `Id_Year`, `Mencion`) VALUES
(1, 1, 1, 2, 'Basica'),
(2, 1, 2, 2, 'Regular'),
(3, 3, 1, 2, 'Media');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prestamo_libro`
--

CREATE TABLE IF NOT EXISTS `prestamo_libro` (
  `id_prestamoLibro` int(11) NOT NULL AUTO_INCREMENT,
  `cedulaEstudiante` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `id_Libro` int(11) NOT NULL,
  `fecha_salida` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `fecha_entrega` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`id_prestamoLibro`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=22 ;

--
-- Volcar la base de datos para la tabla `prestamo_libro`
--

INSERT INTO `prestamo_libro` (`id_prestamoLibro`, `cedulaEstudiante`, `id_Libro`, `fecha_salida`, `fecha_entrega`) VALUES
(1, '22224963', 8, '05/01/2014', '06/01/2014'),
(3, '222222', 1, '11/11/1111', '22/22/2222'),
(16, '21029953', 9, '2014-01-09', '2014-01-10'),
(19, '', 19, '2014-01-03', '2014-01-04'),
(20, 'aaaaaaaaaa', 8, '14/05/2014', '15/05/2014'),
(21, '01234', 19, '2014-01-11', '2014-01-12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesion`
--

CREATE TABLE IF NOT EXISTS `profesion` (
  `Id_Profesion` int(11) NOT NULL AUTO_INCREMENT,
  `Profesion` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `Descripcion` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Profesion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

--
-- Volcar la base de datos para la tabla `profesion`
--


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prueba`
--

CREATE TABLE IF NOT EXISTS `prueba` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_Apellido` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `cedula` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `conducta` varchar(15) COLLATE utf8_spanish2_ci NOT NULL,
  `motivo` varchar(40) COLLATE utf8_spanish2_ci NOT NULL,
  `year` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=17 ;

--
-- Volcar la base de datos para la tabla `prueba`
--

INSERT INTO `prueba` (`id`, `nombre_Apellido`, `cedula`, `conducta`, `motivo`, `year`) VALUES
(1, 'Manuel Abrante', '22224963', 'Buena', 'probando algo', '2013'),
(2, 'Cindy Salinas', '21029953', 'Buena', 'probando algo 2', '2014'),
(6, 'Pepito Perez', '1111111111', '', '', ''),
(12, 'aaaaaGuitew', '21234', '', '', ''),
(13, 'Pepe Gonzalez', '22224963', '', '', ''),
(15, 'Pilsen Polar', '1234566789', '', '', ''),
(16, 'Keily Salinas', '1231445656', '', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prueba2`
--

CREATE TABLE IF NOT EXISTS `prueba2` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `a_nom` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `a_ap` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `a_fecha` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `a_lugar_n` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `a_entidad` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `a_ced` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `a_direcc` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `a_telf1` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `a_telf2` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `a_year` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `a_plantel` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `a_matP` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `a_actividad` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `a_religion` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `a_enf` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `a_aler` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `p_nom` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `p_ap` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `p_ced` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `p_pro` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `p_trb` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `p_tlf1` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `p_tlf2` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `m_nom` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `m_ap` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `m_ced` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `m_pro` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `m_trb` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `m_tlf1` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `m_tlf2` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `e_nom` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `e_ap` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `e_ced` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `e_tlf1` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `e_tlf2` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=23 ;

--
-- Volcar la base de datos para la tabla `prueba2`
--

INSERT INTO `prueba2` (`id`, `a_nom`, `a_ap`, `a_fecha`, `a_lugar_n`, `a_entidad`, `a_ced`, `a_direcc`, `a_telf1`, `a_telf2`, `a_year`, `a_plantel`, `a_matP`, `a_actividad`, `a_religion`, `a_enf`, `a_aler`, `p_nom`, `p_ap`, `p_ced`, `p_pro`, `p_trb`, `p_tlf1`, `p_tlf2`, `m_nom`, `m_ap`, `m_ced`, `m_pro`, `m_trb`, `m_tlf1`, `m_tlf2`, `e_nom`, `e_ap`, `e_ced`, `e_tlf1`, `e_tlf2`) VALUES
(3, 'Manuel', 'Abrante', '1993-03-11', 'Valencia, Edo Carabobo', 'San Diego', '22224963', 'Urb Morro 1 calle 141', '0241-8710846', '0424-4210770', '2015', 'U.E. Santuario', 'No', 'Deporte', 'Cristiano', 'No', 'dengue', 'Pedro', 'Abrante', '4966776', 'Comerciante', 'Pto. Cabello', '0241-8710846', '0414-3488324', 'Milena', 'Talavera', '9580768', 'Comerciante', 'Caracas', '0241-8710846', '0424-4180328', 'Desiree', 'Torres', '123456789', '0000-000001', '000-000002'),
(17, '4444', '123', '', '', '', 'aaaaaaaaaaaa', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(18, '', '123123', '', '123', '', '3213', '', '', '', '', '', 'Si', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(19, '', '123123', '', '123', '', '3213', '', '', '', '', '', 'Si', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(20, '', 'asdasd', '', 'asd', '', '1111111', '', '', '', '', '', 'No', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(21, 'Manuel', 'Abrante', '8188-03-11', 'Valencia', '', '2222496301', 'fdsfdsfsdfsdf', '2222222', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''),
(22, '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recurso`
--

CREATE TABLE IF NOT EXISTS `recurso` (
  `Id_Recurso` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre_Recurso` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Recurso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

--
-- Volcar la base de datos para la tabla `recurso`
--


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `religion`
--

CREATE TABLE IF NOT EXISTS `religion` (
  `Id_Religion` int(11) NOT NULL AUTO_INCREMENT,
  `Religion` varchar(15) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Religion`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=5 ;

--
-- Volcar la base de datos para la tabla `religion`
--

INSERT INTO `religion` (`Id_Religion`, `Religion`) VALUES
(1, 'Catolico'),
(2, 'Cristiano'),
(3, 'Evangelico'),
(4, 'Otros');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `representante`
--

CREATE TABLE IF NOT EXISTS `representante` (
  `Id_Representante` int(11) NOT NULL AUTO_INCREMENT,
  `Rol_Paternidad` varchar(15) COLLATE utf8_spanish2_ci NOT NULL,
  `Id_Profesion` int(11) NOT NULL,
  `Lugar_Trabajo` varchar(150) COLLATE utf8_spanish2_ci NOT NULL,
  `Id_Usuario_Representante` int(11) NOT NULL,
  PRIMARY KEY (`Id_Representante`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=45 ;

--
-- Volcar la base de datos para la tabla `representante`
--

INSERT INTO `representante` (`Id_Representante`, `Rol_Paternidad`, `Id_Profesion`, `Lugar_Trabajo`, `Id_Usuario_Representante`) VALUES
(43, 'Padre', 3, 'Dinamotors de Venezuela C.A', 93),
(44, 'Madre', 4, 'En la casa', 94);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `representante_emergencia`
--

CREATE TABLE IF NOT EXISTS `representante_emergencia` (
  `Id_Representante_Emergencia` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(40) COLLATE utf8_spanish2_ci NOT NULL,
  `Apellido` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `Telefono` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `cedula` varchar(11) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Representante_Emergencia`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=21 ;

--
-- Volcar la base de datos para la tabla `representante_emergencia`
--

INSERT INTO `representante_emergencia` (`Id_Representante_Emergencia`, `Nombre`, `Apellido`, `Telefono`, `cedula`) VALUES
(15, 'Prueba', 'Prueba Emergencia', '0122244', '2102295301'),
(16, 'saddasd', 'sdfvcx', '1515555', '4555555'),
(17, 'Milagros', 'Avendaño', '0241796556', '7896542'),
(18, 'Milagros', 'Avendaño', '0241796556', '7896542'),
(19, 'Milagros', 'Avendaño', '0241796556', '7896542'),
(20, 'Milagros', 'Avendañooooo', '7896542', '0241796556');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `representante_estudiante`
--

CREATE TABLE IF NOT EXISTS `representante_estudiante` (
  `Id_Representante_Estudiante` int(11) NOT NULL AUTO_INCREMENT,
  `Id_Estudiante` int(11) NOT NULL,
  `Id_Representante` int(11) NOT NULL,
  `Descripcion` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Representante_Estudiante`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=39 ;

--
-- Volcar la base de datos para la tabla `representante_estudiante`
--

INSERT INTO `representante_estudiante` (`Id_Representante_Estudiante`, `Id_Estudiante`, `Id_Representante`, `Descripcion`) VALUES
(37, 5, 43, ''),
(38, 5, 44, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `respuestasforos`
--

CREATE TABLE IF NOT EXISTS `respuestasforos` (
  `Id_RespuestaForo` int(11) NOT NULL AUTO_INCREMENT,
  `Id_Foro` int(11) NOT NULL,
  `Id_Usuario` int(11) NOT NULL,
  `Titulo` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `Mensaje` varchar(500) COLLATE utf8_spanish_ci NOT NULL,
  `Fecha` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Hora` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`Id_RespuestaForo`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=13 ;

--
-- Volcar la base de datos para la tabla `respuestasforos`
--

INSERT INTO `respuestasforos` (`Id_RespuestaForo`, `Id_Foro`, `Id_Usuario`, `Titulo`, `Mensaje`, `Fecha`, `Hora`) VALUES
(1, 29, 21029953, 'RE: Primer Foro', 'sadasd', 'Viernes, 10 de Enero de 2014', '2:12:01pm'),
(2, 29, 21029953, 'RE: Primer Foro', '<u>dfgdfvcv &nbsp;</u><b>vcbv dfgdfg</b>', 'Viernes, 10 de Enero de 2014', '2:12:32pm'),
(3, 33, 21029953, 'RE: Foro Docente', 'Respuesta Docente', 'Viernes, 7 de Febrero de 2014', '1:25:43pm'),
(4, 33, 21029953, 'RE: Foro Docente', 'Holaaaa', 'Viernes, 7 de Febrero de 2014', '1:49:11pm'),
(5, 29, 21029953, 'RE: Primer Foro', 'aa', 'Lunes, 10 de Febrero de 2014', '9:05:34am'),
(6, 36, 21029954, 'RE: asd', 'zxc', 'Lunes, 10 de Febrero de 2014', '9:14:20am'),
(7, 34, 21029953, 'RE: Foro Alumno', 'aa', 'Lunes, 10 de Febrero de 2014', '9:27:37am'),
(8, 67, 21029953, 'RE: Hola Vale', 'Hola', 'Lunes, 10 de Febrero de 2014', '9:33:58am'),
(9, 67, 21029953, 'RE: Hola Vale', 'Hola Again', 'Lunes, 10 de Febrero de 2014', '9:34:29am'),
(10, 67, 21029953, 'RE: Hola Vale', 's', 'Lunes, 10 de Febrero de 2014', '9:35:02am'),
(11, 67, 26917254, 'RE: Hola Vale', 'dd', 'Lunes, 10 de Febrero de 2014', '9:38:39am'),
(12, 67, 26917254, 'RE: Hola Vale', 'asd', 'Lunes, 10 de Febrero de 2014', '9:39:08am');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE IF NOT EXISTS `rol` (
  `Id_Rol` int(11) NOT NULL AUTO_INCREMENT,
  `Descripcion_Rol` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`Id_Rol`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=5 ;

--
-- Volcar la base de datos para la tabla `rol`
--

INSERT INTO `rol` (`Id_Rol`, `Descripcion_Rol`) VALUES
(1, 'Administrador'),
(2, 'Docente'),
(3, 'Estudiante'),
(4, 'Representante');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salones`
--

CREATE TABLE IF NOT EXISTS `salones` (
  `Id_Salones` int(11) NOT NULL AUTO_INCREMENT,
  `Salon` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `Descripcion` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`Id_Salones`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=6 ;

--
-- Volcar la base de datos para la tabla `salones`
--

INSERT INTO `salones` (`Id_Salones`, `Salon`, `Descripcion`) VALUES
(1, 'Aula 1er Año', ''),
(2, 'Aula 2do Año', ''),
(3, 'Aula 3er Año', ''),
(4, 'Aula 4to Año', ''),
(5, 'Aula 5to Año', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seccion`
--

CREATE TABLE IF NOT EXISTS `seccion` (
  `Id_Seccion` int(11) NOT NULL AUTO_INCREMENT,
  `Seccion` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `Descripcion` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Seccion`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=4 ;

--
-- Volcar la base de datos para la tabla `seccion`
--

INSERT INTO `seccion` (`Id_Seccion`, `Seccion`, `Descripcion`) VALUES
(1, 'A', ''),
(2, 'B', ''),
(3, 'U', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitudes`
--

CREATE TABLE IF NOT EXISTS `solicitudes` (
  `id_solicitud` int(11) NOT NULL AUTO_INCREMENT,
  `id_tipo_solicitud` int(11) NOT NULL,
  `id_usuarioCedula` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `fecha_solicitud` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `fechaRespuesta` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `comentarios` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `respuesta` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `estado` varchar(40) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`id_solicitud`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=13102 ;

--
-- Volcar la base de datos para la tabla `solicitudes`
--

INSERT INTO `solicitudes` (`id_solicitud`, `id_tipo_solicitud`, `id_usuarioCedula`, `fecha_solicitud`, `fechaRespuesta`, `comentarios`, `respuesta`, `estado`) VALUES
(13090, 1, '22224963', '2014-01-12', '2014-1-15', 'La etiqueta “legend” nos resulta muy útil dentro de la etiqueta fieldset. ', 'respondiendo solicitud 13090', 'Respondida'),
(13091, 2, '21029953', '2014-01-13', '2014-1-15', 'La etiqueta “legend” nos resulta muy útil dentro de la etiqueta fieldset. ', 'Su solicitud ha sido Respondida con exito 3', 'Respondida'),
(13092, 3, '21029954', '2014-01-13', '', 'La etiqueta “legend” nos resulta muy útil dentro de la etiqueta fieldset. ', '', 'Por Responder'),
(13093, 4, '22224963', '2014-01-14', '', 'La etiqueta ', '', 'Por Responder'),
(13094, 5, '21029953', '2014-01-15', '', 'La etiqueta “legend” nos resulta muy útil dentro de la etiqueta fieldset. ', '', 'Por Responder'),
(13095, 6, '21029954', '2014-01-16', '', 'tiqueta fieldset. ', '', 'Por Responder'),
(13096, 7, '22224963', '2014-01-16', '', 'La etiqueta “legend” nos resulta muy útil dentro de la etiqueta fieldset. ', '', 'Por Responder'),
(13097, 8, '22224963', '2014-01-16', '', 'La etiqueta “legend” nos resulta muy útil dentro de la etiqueta fieldset. ', '', 'Por Responder'),
(13098, 2, '21029953', '2014-01-17', '', 'La etiqueta “legend” nos resulta muy útil dentro de la etiqueta fieldset. ', '', 'Por Responder'),
(13099, 1, '21029954', '2014-01-18', '', 'La etiqueta “legend” nos resulta muy útil dentro de la etiqueta fieldset. ', '', 'Por Responder'),
(13100, 4, '22224963', '2014-01-19', '', 'La etiqueta “legend” nos resulta muy útil dentro de la etiqueta fieldset. ', '', 'Respondida'),
(13101, 1, '26917254', '2014-02-010', '', 'Buena Conducta', '', 'Por Responder');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tecnicas_evaluacion_acpl`
--

CREATE TABLE IF NOT EXISTS `tecnicas_evaluacion_acpl` (
  `Id_AP_L` int(11) NOT NULL AUTO_INCREMENT,
  `Id_TDE` int(11) NOT NULL,
  `Descripcion` varchar(60) COLLATE utf32_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_AP_L`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_spanish2_ci AUTO_INCREMENT=1 ;

--
-- Volcar la base de datos para la tabla `tecnicas_evaluacion_acpl`
--


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_evento`
--

CREATE TABLE IF NOT EXISTS `tipo_evento` (
  `Id_Tipo_Evento` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre_Evento` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `Color_Tipo_Evento` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`Id_Tipo_Evento`),
  UNIQUE KEY `Nombre_Evento` (`Nombre_Evento`),
  UNIQUE KEY `Color_Tipo_Evento` (`Color_Tipo_Evento`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=144 ;

--
-- Volcar la base de datos para la tabla `tipo_evento`
--

INSERT INTO `tipo_evento` (`Id_Tipo_Evento`, `Nombre_Evento`, `Color_Tipo_Evento`) VALUES
(7, 'Feriados y dias no laborables', '#8000ff'),
(102, 'otros otros otros otros otros', '#123456'),
(103, 'Otros Feriado Para El Colegio', '#332144'),
(134, 'Avtividades Extra-Academicas', '#8000f1'),
(135, 'holaOtraVez', '#c0c0c0'),
(143, 'Nuevo Tipo De Evento', '#00b9b9');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_lista`
--

CREATE TABLE IF NOT EXISTS `tipo_lista` (
  `id_tipo_lista` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`id_tipo_lista`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=4 ;

--
-- Volcar la base de datos para la tabla `tipo_lista`
--

INSERT INTO `tipo_lista` (`id_tipo_lista`, `tipo`) VALUES
(1, 'Materia Pendiente'),
(2, 'Aula de Clases'),
(3, 'Alumnos Graduandos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_solicitud`
--

CREATE TABLE IF NOT EXISTS `tipo_solicitud` (
  `id_tipo_solicitud` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_solicitud` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `comentarios` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`id_tipo_solicitud`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=10 ;

--
-- Volcar la base de datos para la tabla `tipo_solicitud`
--

INSERT INTO `tipo_solicitud` (`id_tipo_solicitud`, `tipo_solicitud`, `comentarios`) VALUES
(1, 'Constancia de Buena Conducta', ''),
(2, 'Constancia de Estudio', ''),
(3, 'Constancia de Inscripcion', ''),
(4, 'Constancia de Notas', ''),
(5, 'Constancia de Permiso', ''),
(6, 'Constancia de Retiro', ''),
(7, 'Constancia de Sueldo', ''),
(8, 'Permiso de Aulas Para Eventos Estudiantiles', ''),
(9, 'Permiso  de Equipos Audiovisuales', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE IF NOT EXISTS `usuario` (
  `Id_Usuario` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(40) COLLATE utf8_spanish2_ci NOT NULL,
  `Apellido` varchar(40) COLLATE utf8_spanish2_ci NOT NULL,
  `Cedula` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `Email` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `Password` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `Id_Genero` int(10) NOT NULL,
  `Estado_Civil` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `Nacionalidad` varchar(30) COLLATE utf8_spanish2_ci NOT NULL,
  `Telefono` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `Direccion` varchar(150) COLLATE utf8_spanish2_ci NOT NULL,
  `Id_Rol_Usuario` int(11) NOT NULL,
  `Id_Foto_Perfil` int(11) NOT NULL,
  PRIMARY KEY (`Id_Usuario`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=102 ;

--
-- Volcar la base de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`Id_Usuario`, `Nombre`, `Apellido`, `Cedula`, `Email`, `Password`, `Id_Genero`, `Estado_Civil`, `Nacionalidad`, `Telefono`, `Direccion`, `Id_Rol_Usuario`, `Id_Foto_Perfil`) VALUES
(1, 'Cindy', 'Salinas', '21029953', 'cindysalinas15@gmail.com', '21029953', 1, '1', 'Venezolana', '04263431078', 'Prebo', 1, 0),
(2, 'Keily Yoselin', 'Salinas Zambrano', '21029954', 'keily424@hotmail.com', '21029954', 1, '1', 'Venezolana', '04245789654', 'Prebo', 2, 0),
(3, 'Manuel Alejandro', 'Abrante Talavera', '22224963', 'abrantemanuel@gmail.com', '22224963', 2, '1', 'Venezolano', '04244210770', 'San Diego', 1, 0),
(4, 'Pedro Luis', 'Abrante Ferreira', '01234567', 'abrantepedro@gmail.com', '01234567', 2, '1', 'Venezolano', '04124177316', 'San Diego', 2, 0),
(5, 'Jen ', 'Selter', '76543210', 'jenselter@gmail.com', '76543210', 1, '2', 'NewYork', '04140123456', 'New York', 2, 0),
(7, 'Luinder Jesus', 'Salazar Inaga', '26580756', 'salazarinaga@venezuela90.com', '26580756', 2, '1', 'Venezolano', '04120123456', 'Prebo', 3, 0),
(8, 'Denger Jesus', 'Perez Aponte', '26581529', 'dengerperez@venezuela90.com', '26581529', 2, '1', 'Venezolano', '01234567891', 'Guacara', 3, 0),
(9, 'Edward Andres', 'Cabrera Gonzales', '26634620', 'cabreraedward@venezuela90.com', '26634620', 2, '1', 'Venezolano', '19876543210', 'Maturin', 3, 0),
(10, 'Brayan', 'Sangroniz sangroniz', '26642123', 'sangronizbrayan@venezuela90.com', '26642123', 2, '1', 'Venezolano', '01223456789', 'Prebo', 3, 0),
(11, 'Cleinderman Javier', 'Herrada Rodriguez', '26917254', 'herradajavier@venezuela90.com', '26917254', 2, '1', 'Venezolano', '32104569878', 'Prebo', 3, 0),
(78, 'Papa prueba', 'Apellido Prueba', '4195486', 'padre@prueba.com', '4195486', 2, '', '', '02144122771', 'En no se donde', 4, 0),
(79, 'Mama Prueba', 'Prueba Act Madre', '4233661', 'madre@prueba.com', '4233661', 1, '', '', '0123448', 'En no se donde', 4, 0),
(92, 'Leonel Jesus', 'Abrante Talaveraaaaa', '27014949', 'abranteleo@gmail.com', '27014949', 2, '1', 'Venezolano', '04144195869', 'Urb Morro I ', 3, 0),
(93, 'Pedro Tomas', 'Abrante Estevezooooo', '49667776', 'abrantepedro@gmail.com', '49667776', 2, '1', 'Venezolana', '04144180328', 'Urb Morro I ', 4, 0),
(94, 'Milena', 'Talaveraooooo', '9580768', 'talaveramilena@gmail.com', '9580768', 1, '1', 'Venezolana', '04143488324', 'Urb Morro I ', 4, 0),
(95, 'Admin Prueba', 'Prueba Admin', '12345678', 'adminprueba@prueba.com', '12345678', 2, '2', 'Uruguayo', '012334454', 'en su ptm', 4, 0),
(97, 'Docente Prueba', 'Prueba Docente', '124511254', 'docente@prueba.com', '124511254', 1, '1', 'Venezolano', '041225115', 'fsdfsdfaaasdasd', 2, 0),
(100, 'asdasd', 'asdasd', '3423525', 'asdsad', '3423525', 2, '2', 'asdsad', 'sadasd', 'asdasd', 2, 0),
(101, 'adsd', 'asd', '124235', 'asdas', '124235', 1, '2', 'asdasdasd', 'asdas', 'dasdasd', 1, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `year_actual`
--

CREATE TABLE IF NOT EXISTS `year_actual` (
  `Id_Year_Actual` int(11) NOT NULL AUTO_INCREMENT,
  `Id_Year_Escolar` int(11) NOT NULL,
  `Descripcion` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`Id_Year_Actual`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=2 ;

--
-- Volcar la base de datos para la tabla `year_actual`
--

INSERT INTO `year_actual` (`Id_Year_Actual`, `Id_Year_Escolar`, `Descripcion`) VALUES
(1, 2, 'Año Escolar Actual 2013/2014');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `year_escolar`
--

CREATE TABLE IF NOT EXISTS `year_escolar` (
  `Id_Year_Escolar` int(11) NOT NULL AUTO_INCREMENT,
  `Year_Escolar` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`Id_Year_Escolar`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=4 ;

--
-- Volcar la base de datos para la tabla `year_escolar`
--

INSERT INTO `year_escolar` (`Id_Year_Escolar`, `Year_Escolar`) VALUES
(1, '2012/2013'),
(2, '2013/2014'),
(3, '2014/2015');
