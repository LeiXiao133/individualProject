-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 24, 2021 at 09:16 PM
-- Server version: 10.3.28-MariaDB-log
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `leixiaoc_individualProject`
--

-- --------------------------------------------------------

--
-- Table structure for table `quiz`
--

CREATE TABLE `quiz` (
  `questioNum` int(11) NOT NULL,
  `question` varchar(1000) DEFAULT NULL,
  `an1` varchar(1000) DEFAULT NULL,
  `an2` varchar(1000) DEFAULT NULL,
  `an3` varchar(1000) DEFAULT NULL,
  `an4` varchar(1000) DEFAULT NULL,
  `ansKey` varchar(1000) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `quiz`
--

INSERT INTO `quiz` (`questioNum`, `question`, `an1`, `an2`, `an3`, `an4`, `ansKey`) VALUES
(1, 'What will the console print? \r\n const foo = function(a,b) {\r\n a += b;\r\n return a * (a - b)};\r\n const num = foo(2,3);\r\n console.log(num);', '10', '25', '-10', '-25', '10'),
(2, 'What will the console print?\r\n  const arr = [1,2,3,4,5];\r\n  const obj = {1 : arr.length};\r\n  console.log(obj[1]);', 'undefined', 'not defined', '5', 'error', '5'),
(3, 'aaa', 'aa', 'a', 'a', 'a', 'a'),
(4, '1+1', '1', '2', '3', '4', '2'),
(5, '2 2', '3', '4', '5', '6', '4');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`questioNum`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
