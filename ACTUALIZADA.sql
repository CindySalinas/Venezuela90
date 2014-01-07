-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 07-01-2014 a las 02:57:44
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.3.13

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `venezuela90`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividades`
--

CREATE TABLE IF NOT EXISTS `actividades` (
  `Id_Actividades` int(11) NOT NULL AUTO_INCREMENT,
  `Actividad` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  `Descripcion` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Actividades`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

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
  `Id_Recurso` int(11) NOT NULL,
  `Ponderacion` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `Fecha` varchar(11) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_AP_Lapso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alergias`
--

CREATE TABLE IF NOT EXISTS `alergias` (
  `Id_Alergias` int(11) NOT NULL AUTO_INCREMENT,
  `Alergia` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Alergias`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calificaciones`
--

CREATE TABLE IF NOT EXISTS `calificaciones` (
  `Id_Califiaciones` int(11) NOT NULL AUTO_INCREMENT,
  `Califiacion` int(11) NOT NULL,
  `Descripcion` varchar(5) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Califiaciones`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `desarrollo`
--

CREATE TABLE IF NOT EXISTS `desarrollo` (
  `Id_Desarrollo` int(11) NOT NULL AUTO_INCREMENT,
  `Descripcion_Desarrollo` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Desarrollo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `docente`
--

CREATE TABLE IF NOT EXISTS `docente` (
  `Id_Docente` int(11) NOT NULL AUTO_INCREMENT,
  `Cedula` varchar(11) COLLATE utf8_spanish2_ci NOT NULL,
  `Descripcion` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  `fecha_nacimiento` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `lugar_nacimiento` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Docente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `enfermedad`
--

CREATE TABLE IF NOT EXISTS `enfermedad` (
  `Id_Enfermedad` int(11) NOT NULL AUTO_INCREMENT,
  `Enfermedad` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Enfermedad`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estudiante`
--

CREATE TABLE IF NOT EXISTS `estudiante` (
  `Id_Estudiante` int(11) NOT NULL AUTO_INCREMENT,
  `Id_Grado` int(11) NOT NULL,
  `Id_Seccion` int(11) NOT NULL,
  `Id_Religion` int(11) NOT NULL,
  `Entidad` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `Fecha_Nacimiento` varchar(11) COLLATE utf8_spanish2_ci NOT NULL,
  `Lugar_Nacimiento` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `Fecha_Ingreso` varchar(11) COLLATE utf8_spanish2_ci NOT NULL,
  `Id_Representante_Emergencia` int(11) NOT NULL,
  `Id_Year` int(11) NOT NULL,
  `Cedula` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Estudiante`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

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
-- Volcado de datos para la tabla `estudiante_prestamo`
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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genero`
--

CREATE TABLE IF NOT EXISTS `genero` (
  `Id_Genero` int(11) NOT NULL AUTO_INCREMENT,
  `Genero` varchar(30) COLLATE utf8_spanish2_ci NOT NULL,
  `Descripcion` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Genero`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horario`
--

CREATE TABLE IF NOT EXISTS `horario` (
  `Id_Horario` int(11) NOT NULL AUTO_INCREMENT,
  `Hora_Inicio` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `Hora_Fin` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Horario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `horario_materia`
--

CREATE TABLE IF NOT EXISTS `horario_materia` (
  `Id_Horario_Materia` int(11) NOT NULL AUTO_INCREMENT,
  `Id_Materia` int(11) NOT NULL,
  `Id_Profesor` int(11) NOT NULL,
  `Id_Horario` int(11) NOT NULL,
  `Descripcion` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Horario_Materia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ie`
--

CREATE TABLE IF NOT EXISTS `ie` (
  `Id_IE` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre_Id` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_IE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lapso`
--

CREATE TABLE IF NOT EXISTS `lapso` (
  `Id_Lapso` int(11) NOT NULL AUTO_INCREMENT,
  `Lapso` varchar(15) COLLATE utf8_spanish_ci NOT NULL,
  `Descripcion` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`Id_Lapso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=1 ;

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=21 ;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` (`id_libro`, `nombre_libro`, `autor_libro`, `materia_libro`, `year_libro`, `edit_libro`, `edicion_libro`, `cantidad_libro`) VALUES
(8, 'Caballero Armadura Oxidada', 'Robert Fisher', 'Castellano', '1989', 'Ediciones Obelisco', 'Pepito Perez', 3),
(9, 'Calculo Integral', 'Larson', 'Matematica', '2009', 'Mc Graw Hill', 'Bruce Edwards', 4),
(19, 'Como Cocinar', 'Manuel', 'General', '2002', 'Abrante C.A', 'Manuel', 0),
(20, 'asdasd', 'asd', 'asd', '1234', 'asdasd', 'asd', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materia`
--

CREATE TABLE IF NOT EXISTS `materia` (
  `Id_Materia` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre_Materia` varchar(40) COLLATE utf8_spanish2_ci NOT NULL,
  `Descripcion` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Materia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materia_docente`
--

CREATE TABLE IF NOT EXISTS `materia_docente` (
  `Id_Materia_Docente` int(11) NOT NULL AUTO_INCREMENT,
  `Id_Docente` int(11) NOT NULL,
  `Id_Materia` int(11) NOT NULL,
  `Descripcion` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Materia_Docente`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materia_pendiente_estudiante`
--

CREATE TABLE IF NOT EXISTS `materia_pendiente_estudiante` (
  `Id_Materia_Pendiente_Estudiante` int(11) NOT NULL AUTO_INCREMENT,
  `Id_Materia_Pendiente` int(11) NOT NULL,
  `Id_Estudiante` int(11) NOT NULL,
  `Descripcion` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Materia_Pendiente_Estudiante`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `planificacion_por_lapso`
--

CREATE TABLE IF NOT EXISTS `planificacion_por_lapso` (
  `Id_Planificacion_Por_Lapso` int(11) NOT NULL AUTO_INCREMENT,
  `Id_Lapso` int(11) NOT NULL,
  PRIMARY KEY (`Id_Planificacion_Por_Lapso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plan_semanal`
--

CREATE TABLE IF NOT EXISTS `plan_semanal` (
  `Id_Plan_Semanal` int(11) NOT NULL AUTO_INCREMENT,
  `Numero_Semana` int(11) NOT NULL,
  `Id_Fecha` int(11) NOT NULL,
  `Id_Materia` int(11) NOT NULL,
  `Objetivo` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  `Tema` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  `Inicio` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `Id_Desarrollo` int(11) NOT NULL,
  `Cierre` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `Observacion` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Plan_Semanal`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

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
-- Volcado de datos para la tabla `prestamo_libro`
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
-- Volcado de datos para la tabla `prueba`
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
-- Volcado de datos para la tabla `prueba2`
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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `religion`
--

CREATE TABLE IF NOT EXISTS `religion` (
  `Id_Religion` int(11) NOT NULL AUTO_INCREMENT,
  `Religion` varchar(15) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Religion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `representante`
--

CREATE TABLE IF NOT EXISTS `representante` (
  `Id_Representante` int(11) NOT NULL AUTO_INCREMENT,
  `Rol_Paternidad` varchar(15) COLLATE utf8_spanish2_ci NOT NULL,
  `Id_Profesion` int(11) NOT NULL,
  `Lugar_Trabajo` varchar(150) COLLATE utf8_spanish2_ci NOT NULL,
  `Cedula` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Representante`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `representante_emergencia`
--

CREATE TABLE IF NOT EXISTS `representante_emergencia` (
  `Id_Representante_Emergencia` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(40) COLLATE utf8_spanish2_ci NOT NULL,
  `Apellido` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `Direccion` varchar(150) COLLATE utf8_spanish2_ci NOT NULL,
  `Telefono` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Representante_Emergencia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE IF NOT EXISTS `rol` (
  `Id_Rol` int(11) NOT NULL AUTO_INCREMENT,
  `Descripcion_Rol` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`Id_Rol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seccion`
--

CREATE TABLE IF NOT EXISTS `seccion` (
  `Id_Seccion` int(11) NOT NULL AUTO_INCREMENT,
  `Seccion` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `Descripcion` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Seccion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

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
  PRIMARY KEY (`Id_Usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `year`
--

CREATE TABLE IF NOT EXISTS `year` (
  `Id_Year` int(11) NOT NULL AUTO_INCREMENT,
  `Year` varchar(10) COLLATE utf8_spanish2_ci NOT NULL,
  `Descripcion` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`Id_Year`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=1 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
