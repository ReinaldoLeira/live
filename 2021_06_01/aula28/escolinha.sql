-- MySQL Workbench Forward Engineering
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
-- -----------------------------------------------------
-- Schema escolinha
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema escolinha
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `escolinha` DEFAULT CHARACTER SET utf8 ;
USE `escolinha` ;
-- -----------------------------------------------------
-- Table `escolinha`.`Alunos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `escolinha`.`Alunos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(150) NOT NULL,
  `idade` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`, `idade`))
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `escolinha`.`Disciplinas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `escolinha`.`Disciplinas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;
-- -----------------------------------------------------
-- Table `escolinha`.`alunos_disciplinas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `escolinha`.`alunos_disciplinas` (
  `idAlunos` INT NOT NULL,
  `idDisciplina` INT NOT NULL,
  `media` FLOAT NULL,
  `alunos_disciplinascol` VARCHAR(45) NULL,
  INDEX `fk_aluno_disciplina_Alunos_idx` (`idAlunos` ASC) VISIBLE,
  INDEX `fk_aluno_disciplina_Disciplina1_idx` (`idDisciplina` ASC) VISIBLE,
  CONSTRAINT `fk_aluno_disciplina_Alunos`
    FOREIGN KEY (`idAlunos`)
    REFERENCES `escolinha`.`Alunos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_aluno_disciplina_Disciplina1`
    FOREIGN KEY (`idDisciplina`)
    REFERENCES `escolinha`.`Disciplinas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;