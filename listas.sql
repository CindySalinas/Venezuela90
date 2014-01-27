-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 27-01-2014 a las 14:21:21
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
-- Estructura de tabla para la tabla `listas`
--

CREATE TABLE IF NOT EXISTS `listas` (
  `id_lista` int(11) NOT NULL AUTO_INCREMENT,
  `id_tipo_lista` int(11) NOT NULL,
  `nombre_Lista` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `Descripcion` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`id_lista`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=27 ;

--
-- Volcado de datos para la tabla `listas`
--

INSERT INTO `listas` (`id_lista`, `id_tipo_lista`, `nombre_Lista`, `Descripcion`) VALUES
(2, 2, 'Aula de Clase 7mo', ''),
(3, 3, 'Lista Prueba Nueva', ''),
(18, 3, 'Nueva Lista Prueba 2', ''),
(26, 1, 'Materias Pendiente', '');

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=44 ;

--
-- Volcado de datos para la tabla `lista_estudiantes`
--

INSERT INTO `lista_estudiantes` (`id_Lista_Estudio`, `id_lista`, `cedula`, `Descripcion`) VALUES
(27, 2, '26580756', ''),
(28, 2, '26581529', ''),
(29, 2, '26581529', ''),
(30, 2, '26634620', ''),
(31, 2, '26642123', ''),
(32, 2, '26917254', ''),
(33, 18, '21029953', ''),
(34, 18, '21029954', ''),
(35, 18, '22224963', ''),
(36, 18, '01234567', ''),
(37, 18, '76543210', ''),
(38, 26, '26581529', ''),
(39, 26, '21029953', ''),
(40, 26, '22224963', ''),
(41, 26, '01234567', ''),
(42, 26, '76543210', ''),
(43, 26, '26917254', '');

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
-- Volcado de datos para la tabla `tipo_lista`
--

INSERT INTO `tipo_lista` (`id_tipo_lista`, `tipo`) VALUES
(1, 'Materia Pendiente'),
(2, 'Aula de Clases'),
(3, 'Alumnos Graduandos');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
