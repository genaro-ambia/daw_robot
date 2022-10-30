-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 30-10-2022 a las 02:44:15
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `materias`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrera`
--

CREATE TABLE `carrera` (
  `ID_carrera` varchar(10) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `nombre_C` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `carrera`
--

INSERT INTO `carrera` (`ID_carrera`, `nombre_C`) VALUES
('IFI', 'Ingenieria en fisica industrial'),
('IME', 'Ingeniero mecanico electrico'),
('IMI', 'Ingenieria en producción musical digital'),
('IMT', 'Ingenieria en mecatronica'),
('IQA', 'Ingenieria en quimica administrativa'),
('ISD', 'Ingenieria en sistemas digitales y robotica'),
('ITC', 'Ingenieria en tecnologias computacionales'),
('ITS', 'Ingenieria en telecomunicaciones y sistemas '),
('LAE', 'Licenciatura en admin de empresas'),
('LCMD', 'Licenciatura en comunicacion y medios digitales');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materias`
--

CREATE TABLE `materias` (
  `ID_materia` varchar(10) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `nombre` varchar(100) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `profesor` varchar(50) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `unidades` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `materias`
--

INSERT INTO `materias` (`ID_materia`, `nombre`, `profesor`, `unidades`) VALUES
('F1003', 'Fisica ii', 'Emil Liebermann', 8),
('TC2026', 'Desarrollo de aplicaciones web', 'Eduardo Juarez', 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `relacion`
--

CREATE TABLE `relacion` (
  `ID_materia` varchar(10) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `ID_carrera` varchar(10) COLLATE utf8mb4_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrera`
--
ALTER TABLE `carrera`
  ADD PRIMARY KEY (`ID_carrera`);

--
-- Indices de la tabla `materias`
--
ALTER TABLE `materias`
  ADD PRIMARY KEY (`ID_materia`);

--
-- Indices de la tabla `relacion`
--
ALTER TABLE `relacion`
  ADD PRIMARY KEY (`ID_materia`,`ID_carrera`),
  ADD KEY `ID_carrera` (`ID_carrera`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `relacion`
--
ALTER TABLE `relacion`
  ADD CONSTRAINT `relacion_ibfk_1` FOREIGN KEY (`ID_materia`) REFERENCES `materias` (`ID_materia`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `relacion_ibfk_2` FOREIGN KEY (`ID_carrera`) REFERENCES `carrera` (`ID_carrera`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
