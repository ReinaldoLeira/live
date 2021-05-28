/* CRIAR UMA PESSOA */

INSERT INTO Pessoas(nome, cpf, email) values('farias', '0001110012', 'farias@mail.com');

 /* LISTAR PESSOAS CADASTRADAS */
 
 SELECT * FROM pessoas;
 
 /* ATUALIZAR PESSOA 2 */
 
 UPDATE pessoas SET nome = 'barros'
 WHERE id = 2;