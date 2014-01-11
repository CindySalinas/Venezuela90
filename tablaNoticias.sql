-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 11-01-2014 a las 04:20:33
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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=24 ;

--
-- Volcar la base de datos para la tabla `noticias`
--

INSERT INTO `noticias` (`Id_Noticia`, `Id_Usuario_Creador`, `Titulo_Noticia`, `Noticia`, `Imagen_Noticia`, `Fecha_Noticia`, `Hora_Noticia`) VALUES
(19, 21029953, 'Modificar xD', 'modificando', '../images/user.png', 'Viernes, 10 de Enero de 2014', '10:39:02pm'),
(22, 21029953, 'otroModificar', 'Cont 2', '../images/user.png', 'Viernes, 10 de Enero de 2014', '10:45:42pm'),
(23, 21029953, 'dfdggfhff11', 'modificargg', '../images/user.png', 'Viernes, 10 de Enero de 2014', '10:46:15pm');
