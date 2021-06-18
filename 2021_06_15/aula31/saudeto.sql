-- MySQL Workbench Forward Engineering
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
-- -----------------------------------------------------
-- Schema saudeto
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema saudeto
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `saudeto` DEFAULT CHARACTER SET utf8 ;
USE `saudeto` ;
-- -----------------------------------------------------
-- Table `saudeto`.`pessoas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `saudeto`.`pessoas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(150) NOT NULL,
  `cpf` VARCHAR(11) NOT NULL,
  `createdAt` DATETIME NULL,
  `updatedAt` DATETIME NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `cpf_UNIQUE` (`cpf` ASC) VISIBLE)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `saudeto`.`planosDeSaude`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `saudeto`.`planosDeSaude` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `carteirinha` VARCHAR(16) NOT NULL,
  `createdAt` DATETIME NULL,
  `updatedAt` DATETIME NULL,
  `pessoas_id` INT NOT NULL,
  PRIMARY KEY (`id`, `pessoas_id`),
  INDEX `fk_planosDeSaude_pessoas1_idx` (`pessoas_id` ASC) VISIBLE,
  CONSTRAINT `fk_planosDeSaude_pessoas1`
    FOREIGN KEY (`pessoas_id`)
    REFERENCES `saudeto`.`pessoas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `saudeto`.`dependentes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `saudeto`.`dependentes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `idPessoas` INT NOT NULL,
  `nome` VARCHAR(150) NULL,
  `createdAt` DATETIME NULL,
  `updatedAt` DATETIME NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_dependentes_pessoas_idx` (`idPessoas` ASC) VISIBLE,
  CONSTRAINT `fk_dependentes_pessoas`
    FOREIGN KEY (`idPessoas`)
    REFERENCES `saudeto`.`pessoas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;