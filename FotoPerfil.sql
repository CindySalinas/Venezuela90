-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 08-02-2014 a las 01:15:11
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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci AUTO_INCREMENT=12 ;

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
(11, 'Cleinderman Javier', 'Herrada Rodriguez', '26917254', 'herradajavier@venezuela90.com', '26917254', 2, '1', 'Venezolano', '32104569878', 'Prebo', 3, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
