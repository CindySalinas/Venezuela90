-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 10-02-2014 a las 23:31:33
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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=7 ;

--
-- Volcado de datos para la tabla `actividades`
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
-- Volcado de datos para la tabla `docente`
--

INSERT INTO `docente` (`Id_Docente`, `Id_Usuario_Docente`, `Descripcion`, `fecha_nacimiento`, `lugar_nacimiento`) VALUES
(1, 5, 'Una gringa bien chevere de un video', '18/01/2014', 'New York'),
(2, 4, 'My brother xd', '11/03/1993', 'San Diego'),
(3, 2, 'Keilyyyyyyy', '24/04/1991', 'Prebo'),
(8, 101, '', '1985-02-14', 'en ccs'),
(9, 100, '', '2014-02-04', 'dasdasd');

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
-- Volcado de datos para la tabla `estudiante`
--

INSERT INTO `estudiante` (`Id_Estudiante`, `Id_Usuario`, `Id_Grado`, `Id_Seccion`, `Id_Religion`, `Id_Year_Escolar`, `Entidad`, `Fecha_Nacimiento`, `Lugar_Nacimiento`, `Fecha_Ingreso`, `Materia_Pendiente`, `Id_Representante_Emergencia`, `Id_Usuario_Estudiante`, `Alergia`, `Enfermedad`, `Id_Actividad`, `Plantel_Procendecia`) VALUES
(1, 7, 3, 3, 1, 2, 'Morro II', '1999-04-11', 'San Diegos', '', 'NO', 1, 26580756, '', '', 3, 'U.E Santuario'),
(2, 8, 3, 3, 1, 2, 'Morro II', '1999-04-11', 'San Diegos', '', 'NO', 2, 26581529, '', '', 3, 'U.E Santuario'),
(3, 9, 3, 3, 1, 2, 'Morro II', '1999-04-11', 'San Diegos', '', 'NO', 3, 26634620, '', '', 3, 'U.E Santuario'),
(4, 10, 3, 3, 1, 2, 'Morro II', '1999-04-11', 'San Diegos', '', 'NO', 4, 26642123, '', '', 3, 'U.E Santuario'),
(5, 11, 3, 3, 1, 2, 'Morro II', '1999-04-11', 'San Diegos', '', 'NO', 5, 26917254, '', '', 3, 'U.E Santuario'),
(28, 92, 5, 0, 1, 3, 'Morro II', '1999-04-11', 'San Diegos', '2014-02-09', 'SI', 20, 27014949, '', '', 4, 'U.E Santuario');

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
-- Volcado de datos para la tabla `representante`
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
-- Volcado de datos para la tabla `representante_emergencia`
--

INSERT INTO `representante_emergencia` (`Id_Representante_Emergencia`, `Nombre`, `Apellido`, `Telefono`, `cedula`) VALUES
(15, 'Prueba', 'Prueba Emergencia', '0122244', '2102295301'),
(16, 'saddasd', 'sdfvcx', '1515555', '4555555'),
(17, 'Milagros', 'Avendaño', '0241796556', '7896542'),
(18, 'Milagros', 'Avendaño', '0241796556', '7896542'),
(19, 'Milagros', 'Avendaño', '0241796556', '7896542'),
(20, 'Milagros', 'Avendaño', '0241796556', '7896542');

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
-- Volcado de datos para la tabla `representante_estudiante`
--

INSERT INTO `representante_estudiante` (`Id_Representante_Estudiante`, `Id_Estudiante`, `Id_Representante`, `Descripcion`) VALUES
(2, 23, 34, ''),
(27, 23, 33, ''),
(37, 28, 43, ''),
(38, 28, 44, '');

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
-- Volcado de datos para la tabla `usuario`
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
(78, 'Papa prueba', 'Apellido Prueba', '4195486', 'padre@prueba.com', '4195486', 2, '', '', '02144122771', 'En no se donde', 3, 0),
(79, 'Mama Prueba', 'Prueba Act Madre', '4233661', 'madre@prueba.com', '4233661', 1, '', '', '0123448', 'En no se donde', 3, 0),
(92, 'Leonel Jesus', 'Abrante Talavera', '27014949', 'abranteleo@gmail.com', '27014949', 2, '1', 'Venezolano', '04144195869', 'Urb Morro I ', 3, 0),
(93, 'Pedro Tomas', 'Abrante Estevez', '49667776', 'abrantepedro@gmail.com', '49667776', 2, '', '', '04144180328', 'Urb Morro I ', 3, 0),
(94, 'Milena', 'Talavera', '9580768', 'talaveramilena@gmail.com', '9580768', 1, '', '', '04143488324', 'Urb Morro I ', 3, 0),
(95, 'Admin Prueba', 'Prueba Admin', '12345678', 'adminprueba@prueba.com', '12345678', 2, '2', 'Uruguayo', '012334454', 'en su ptm', 1, 0),
(97, 'Docente Prueba', 'Prueba Docente', '124511254', 'docente@prueba.com', '124511254', 1, '1', 'Venezolano', '041225115', 'fsdfsdfaaasdasd', 2, 0),
(100, 'asdasd', 'asdasd', '3423525', 'asdsad', '3423525', 2, '2', 'asdsad', 'sadasd', 'asdasd', 2, 0),
(101, 'adsd', 'asd', '124235', 'asdas', '124235', 1, '2', 'asdasdasd', 'asdas', 'dasdasd', 1, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
