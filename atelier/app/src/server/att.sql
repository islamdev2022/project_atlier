-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 15, 2024 at 10:32 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `att`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `idC` int(255) NOT NULL,
  `nom` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`idC`, `nom`) VALUES
(1, 'Biochemie'),
(2, 'BIA');

-- --------------------------------------------------------

--
-- Table structure for table `facturep`
--

CREATE TABLE `facturep` (
  `idF` int(11) NOT NULL,
  `idPr` int(11) NOT NULL,
  `prixTotal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `facturep`
--

INSERT INTO `facturep` (`idF`, `idPr`, `prixTotal`) VALUES
(1, 1, 1800);

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `idP` int(255) NOT NULL,
  `Nom` varchar(255) NOT NULL,
  `Prenom` varchar(255) NOT NULL,
  `Date_Naissance` year(4) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`idP`, `Nom`, `Prenom`, `Date_Naissance`, `email`) VALUES
(1, 'issam', 'mar', '2001', 'mokh@gmail.com'),
(2, 'sami', 'sis', '2004', 'sam@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `prelevement`
--

CREATE TABLE `prelevement` (
  `idPr` int(255) NOT NULL,
  `idP` int(255) NOT NULL,
  `idU` int(255) NOT NULL,
  `valide` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `prelevement`
--

INSERT INTO `prelevement` (`idPr`, `idP`, `idU`, `valide`) VALUES
(1, 1, 2, 0),
(2, 2, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `produit`
--

CREATE TABLE `produit` (
  `idProd` int(255) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `prix` int(255) NOT NULL,
  `quantite` int(11) NOT NULL,
  `fournisseur` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `produit`
--

INSERT INTO `produit` (`idProd`, `nom`, `prix`, `quantite`, `fournisseur`) VALUES
(1, 'liquides inflammables', 150, 15, 'djamal'),
(2, 'liquides inflammables', 200, 14, 'djamal');

-- --------------------------------------------------------

--
-- Table structure for table `resultat`
--

CREATE TABLE `resultat` (
  `code` varchar(255) NOT NULL,
  `idPr` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `type`
--

CREATE TABLE `type` (
  `code` varchar(255) NOT NULL,
  `abrv` varchar(255) NOT NULL,
  `prix` int(255) NOT NULL,
  `idC` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `type`
--

INSERT INTO `type` (`code`, `abrv`, `prix`, `idC`) VALUES
('A01', 'FNS', 255, 1),
('B01', 'VS', 150, 2);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `mot_passe` int(11) NOT NULL,
  `idU` int(255) NOT NULL,
  `professon` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`nom`, `prenom`, `user_name`, `mot_passe`, `idU`, `professon`) VALUES
('rida', 'mokhtar', 'mokh27', 123, 1, 'biologist'),
('islam', 'birouk', 'islam00', 123, 2, 'medecin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`idC`);

--
-- Indexes for table `facturep`
--
ALTER TABLE `facturep`
  ADD PRIMARY KEY (`idF`),
  ADD KEY `idPr` (`idPr`);

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`idP`);

--
-- Indexes for table `prelevement`
--
ALTER TABLE `prelevement`
  ADD PRIMARY KEY (`idPr`),
  ADD KEY `idU` (`idU`),
  ADD KEY `test` (`idP`);

--
-- Indexes for table `produit`
--
ALTER TABLE `produit`
  ADD PRIMARY KEY (`idProd`);

--
-- Indexes for table `resultat`
--
ALTER TABLE `resultat`
  ADD KEY `resultat_ibfk_1` (`idPr`),
  ADD KEY `code` (`code`);

--
-- Indexes for table `type`
--
ALTER TABLE `type`
  ADD PRIMARY KEY (`code`),
  ADD KEY `idC` (`idC`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`idU`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `idC` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `facturep`
--
ALTER TABLE `facturep`
  MODIFY `idF` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `patient`
--
ALTER TABLE `patient`
  MODIFY `idP` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `prelevement`
--
ALTER TABLE `prelevement`
  MODIFY `idPr` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `produit`
--
ALTER TABLE `produit`
  MODIFY `idProd` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `idU` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `facturep`
--
ALTER TABLE `facturep`
  ADD CONSTRAINT `facturep_ibfk_1` FOREIGN KEY (`idPr`) REFERENCES `prelevement` (`idPr`);

--
-- Constraints for table `prelevement`
--
ALTER TABLE `prelevement`
  ADD CONSTRAINT `prelevement_ibfk_1` FOREIGN KEY (`idU`) REFERENCES `user` (`idU`),
  ADD CONSTRAINT `test` FOREIGN KEY (`idP`) REFERENCES `patient` (`idP`);

--
-- Constraints for table `resultat`
--
ALTER TABLE `resultat`
  ADD CONSTRAINT `resultat_ibfk_1` FOREIGN KEY (`idPr`) REFERENCES `prelevement` (`idPr`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `resultat_ibfk_2` FOREIGN KEY (`code`) REFERENCES `type` (`code`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `type`
--
ALTER TABLE `type`
  ADD CONSTRAINT `type_ibfk_1` FOREIGN KEY (`idC`) REFERENCES `category` (`idC`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
