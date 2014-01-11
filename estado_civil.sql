-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 11-01-2014 a las 15:45:47
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
-- Estructura de tabla para la tabla `estado_civil`
--

CREATE TABLE IF NOT EXISTS `estado_civil` (
  `id_Edo_civil` int(11) NOT NULL AUTO_INCREMENT,
  `Edo_Civil` varchar(30) COLLATE utf8_spanish2_ci NOT NULL,
  `Descripcion` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  PRIMARY KEY (`id_Edo_civil`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=3 ;

--
-- Volcado de datos para la tabla `estado_civil`
--

INSERT INTO `estado_civil` (`id_Edo_civil`, `Edo_Civil`, `Descripcion`) VALUES
(1, 'Solter@', ''),
(2, 'Casad@', '');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
