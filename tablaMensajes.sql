-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 12-01-2014 a las 05:47:37
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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes`
--

CREATE TABLE IF NOT EXISTS `mensajes` (
  `Id_Mensaje` int(11) NOT NULL AUTO_INCREMENT,
  `Correo_Remitente` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Correo_Destinatario` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Asunto_Mensaje` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `Mensaje` varchar(500) COLLATE utf8_spanish_ci NOT NULL,
  `Fecha` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Hora` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `Favorito` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  `Leido` varchar(10) COLLATE utf8_spanish_ci NOT NULL,
  PRIMARY KEY (`Id_Mensaje`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=55 ;

--
-- Volcar la base de datos para la tabla `mensajes`
--

INSERT INTO `mensajes` (`Id_Mensaje`, `Correo_Remitente`, `Correo_Destinatario`, `Asunto_Mensaje`, `Mensaje`, `Fecha`, `Hora`, `Favorito`, `Leido`) VALUES
(35, 'keily424@hotmail.com', 'cindysalinas15@gmail.com', 'Asunto Mensaje', 'Mensaje', 'Fecha', 'Hora', 'false', 'false'),
(40, 'cindysalinas15@gmail.com', 'cindysalinas15@gmail.com', 'Asunto', 'Mensaje', 'Domingo, 12 de Enero de 2014', '12:59:49am', 'false', 'true'),
(50, 'cindysalinas15@gmail.com', 'keily424@hotmail.com', '1', '215', 'Domingo, 12 de Enero de 2014', '1:14:08am', 'false', 'true'),
(52, 'keily424@hotmail.com', 'cindysalinas15@gmail.com', 'hjg', 'hjd', 'Domingo, 12 de Enero de 2014', '1:15:42am', 'false', 'true'),
(53, 'keily424@hotmail.com', 'keily424@hotmail.com', 'as', 'sad', 'Domingo, 12 de Enero de 2014', '1:15:58am', 'false', 'true'),
(54, 'keily424@hotmail.com', 'keily424@hotmail.com', 'asd', 'sd', 'Domingo, 12 de Enero de 2014', '1:16:19am', 'false', 'true');
