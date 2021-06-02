/* Inserindo novas pessoas */
INSERT into pessoas(nome, cpf, email) VALUES ('Felipe Pereira', '00011122233', 'felipe@mail.com');
INSERT into pessoas(nome, cpf, email) VALUES ('Felipe Matias', '00011122234', 'felipe.matias@mail.com');
INSERT into pessoas(nome, cpf, email) VALUES ('Matias Gonçalves', '00011122235', 'matias@mail.com');
INSERT into pessoas(nome, cpf, email) VALUES ('Paola Pereira', '00011122236', 'paola@mail.com');

 /* LISTAR PESSOAS CADASTRADAS */
  SELECT nome,cpf FROM pessoas;
  
  
  UPDATE pessoas SET nome = 'Felipe Matias da Silva'
  WHERE cpf = '00011122234';
  
  /* BUSCAR NO BANCO UM VALOR ESPECIFICO, % FUNCIONA COMO * */
  SELECT * FROM pessoas
  WHERE nome LIKE '%Pereira%';
  
INSERT into pessoas(nome, cpf, email) VALUES ('Lilian Souza', '00011342233', 'lilian@mail.com');
INSERT into pessoas(nome, cpf, email) VALUES ('Emannuelle Silva', '00011122299', 'emannnuelle@mail.com');
INSERT into pessoas(nome, cpf, email) VALUES ('rEINALDO lEIRA', '00011122213', 'REINALDO@mail.com');
INSERT into pessoas(nome, cpf, email) VALUES ('Giovanna Clócate', '00011122289', 'giovanna@mail.com');
INSERT into pessoas(nome, cpf, email) VALUES ('Jose Marcos da Silva', '12342323291', 'josemarcos@mail.com');
INSERT into pessoas(nome, cpf, email) VALUES ('Johnny Miyagi', '000654656', 'mail@mail.com');
INSERT into pessoas(nome, cpf, email) VALUES ('Pereira da Silva', '00011125643', 'pereira@mail.com');
INSERT into pessoas(nome, cpf, email) VALUES ('Mauricio da Silva', '00011122564', 'mauricio@mail.com');
INSERT into pessoas(nome, cpf, email) VALUES ('Bruno Henrique', '00011122223', 'bruno@mail.com');
INSERT into pessoas(nome, cpf, email) VALUES ('Paola Oliveira', '06811122236', 'paolaoliveira@mail.com');
INSERT into pessoas(nome, cpf, email) VALUES ('Luiz Araujo', '32457824988', 'luiz@mail.com');



INSERT INTO CARTOES(numero, cvv, bandeira, vencimento, Pessoas_id) VALUES 
('000011112222333', '123', 'master', '01/03', 1);
INSERT INTO CARTOES(numero, cvv, bandeira, vencimento, Pessoas_id) VALUES 
('000011112222334', '123', 'visa', '01/03', 2);
INSERT INTO CARTOES(numero, cvv, bandeira, vencimento, Pessoas_id) VALUES 
('000011112222335', '123', 'master', '01/03', 3);
INSERT INTO CARTOES(numero, cvv, bandeira, vencimento, Pessoas_id) VALUES 
('000011112222336', '123', 'visa', '01/03', 4);
INSERT INTO CARTOES(numero, cvv, bandeira, vencimento, Pessoas_id) VALUES 
('000011112222337', '123', 'master', '01/03', 4);
INSERT INTO CARTOES(numero, cvv, bandeira, vencimento, Pessoas_id) VALUES 
('000011112222338', '123', 'master', '01/03', 4);
INSERT INTO CARTOES(numero, cvv, bandeira, vencimento, Pessoas_id) VALUES 
('000011112222339', '123', 'master', '01/03', 5);

  
 SELECT * FROM cartoes 
 WHERE pessoas_id = 3;
  
/* BUSCAR CARTÕES DA PESSOA COM CPF 06811122236 JOIN */
SELECT * FROM cartoes
INNER JOIN pessoas p ON pessoas_id = p.id /* p depois do id é um apelido que é criado para pessoas, mas pode ser usados diretamente pessoas.id*/
WHERE p.cpf = '00011122236';

/* BUSCAR CARTOES DE PESSOA COM CARTÃO master*/
SELECT * FROM cartoes
INNER JOIN pessoas p ON pessoas_id = p.id 
WHERE bandeira = 'master';

/* BUSCAR CARTOES DE PESSOA COM CARTÃO master(somente cpf)*/
SELECT p.cpf FROM cartoes
INNER JOIN pessoas p ON pessoas_id = p.id /*INNER JOIN apenas apresentas as informações que batem*/
WHERE bandeira = 'master';

/* BUSCAR CARTOES DE PESSOA COM CARTÃO master(somente cpf)*/
SELECT * FROM pessoas /*pessoas por estar no from representa o left*/
LEFT JOIN cartoes ON pessoas_id = pessoas.id; /*cartoes representa o right por estar no join*/


