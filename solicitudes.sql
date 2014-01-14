-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 14-01-2014 a las 03:23:50
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
-- Estructura de tabla para la tabla `solicitudes`
--

CREATE TABLE IF NOT EXISTS `solicitudes` (
  `id_solicitud` int(11) NOT NULL AUTO_INCREMENT,
  `tipo_solicitud` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `id_usuarioCedula` varchar(20) COLLATE utf8_spanish2_ci NOT NULL,
  `fecha_solicitud` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `fechaRespuesta` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `comentarios` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `respuesta` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`id_solicitud`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=13098 ;

--
-- Volcado de datos para la tabla `solicitudes`
--

INSERT INTO `solicitudes` (`id_solicitud`, `tipo_solicitud`, `id_usuarioCedula`, `fecha_solicitud`, `fechaRespuesta`, `comentarios`, `respuesta`) VALUES
(13090, 'Constancia de Buena Conducta', '21029953', '2014-01-01', '', 'Algoooooooo', 'false'),
(13091, 'Constancia de Buena Conducta', '21029954', '2014-01-03', '2014-01-04', 'Adasdsdhfdsf', 'true'),
(13092, 'Constancia de Inscripcion', '22224963', '2014-01-03', '2014-01-05', 'Algo Masd', 'true'),
(13093, 'Constancia de Notas', '22224963', '2014-01-04', '', 'notaaaaaaaaaas', 'false'),
(13094, 'Constancia de Permiso', '21029953', '2014-01-04', '', 'denme permisooooo', 'false'),
(13095, 'Constancia de Retiro', '21029954', '2014-01-13', '2014-01-15', 'me fui', 'true'),
(13096, 'Constancia de Sueldo', '22224963', '2014-01-13', '', 'paguenme :(', 'false'),
(13097, 'Constancia de Trabajo', '21029953', '2014-01-13', '2014-01-16', 'trabajo aqui ? ', 'true');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
