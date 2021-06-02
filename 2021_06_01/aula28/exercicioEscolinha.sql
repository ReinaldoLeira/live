INSERT INTO disciplinas(nome) VALUES('Matemática');
INSERT INTO disciplinas(nome) VALUES('Geografia');
INSERT INTO disciplinas(nome) VALUES('Português');
INSERT INTO disciplinas(nome) VALUES('Ciências');
INSERT INTO disciplinas(nome) VALUES('História');
INSERT INTO alunos(nome, idade) VALUES('Jessica Gomes', 16);
INSERT INTO alunos(nome, idade) VALUES('Josefa Pereira', 15);
INSERT INTO alunos(nome, idade) VALUES('Paula Lima', 18);
INSERT INTO alunos(nome, idade) VALUES('Pietro Junior', 21);
INSERT INTO alunos(nome, idade) VALUES('Larissa Silva', 12);
INSERT INTO alunos(nome, idade) VALUES('Juliana Aparecida', 10);
INSERT INTO alunos(nome, idade) VALUES('Maria Josefa', 19);
INSERT INTO alunos(nome, idade) VALUES('João Silvino', 21);
INSERT INTO alunos(nome, idade) VALUES('João Mauricio', 14);
INSERT INTO alunos(nome, idade) VALUES('Maria das Dores', 12);
INSERT INTO alunos(nome, idade) VALUES('Matheus Silva', 11);
INSERT INTO alunos(nome, idade) VALUES('Mateus Lourenço', 10);
INSERT INTO alunos(nome, idade) VALUES('Bianca Gonçalves', 10);
INSERT INTO alunos_disciplinas(idDisciplina, idAlunos, media) VALUES (2,1,8);
INSERT INTO alunos_disciplinas(idDisciplina, idAlunos, media) VALUES (2,2,7);
INSERT INTO alunos_disciplinas(idDisciplina, idAlunos, media) VALUES (2,3,6);
INSERT INTO alunos_disciplinas(idDisciplina, idAlunos, media) VALUES (2,4,7);
INSERT INTO alunos_disciplinas(idDisciplina, idAlunos, media) VALUES (2,5,8);
INSERT INTO alunos_disciplinas(idDisciplina, idAlunos, media) VALUES (2,6,5);
INSERT INTO alunos_disciplinas(idDisciplina, idAlunos, media) VALUES (2,7,4);
INSERT INTO alunos_disciplinas(idDisciplina, idAlunos, media) VALUES (2,8,3);
INSERT INTO alunos_disciplinas(idDisciplina, idAlunos, media) VALUES (2,9,2);
INSERT INTO alunos_disciplinas(idDisciplina, idAlunos, media) VALUES (2,1,4);
INSERT INTO alunos_disciplinas(idDisciplina, idAlunos, media) VALUES (2,1,9);
INSERT INTO alunos_disciplinas(idDisciplina, idAlunos, media) VALUES (2,1,10);
INSERT INTO alunos_disciplinas(idDisciplina, idAlunos, media) VALUES (3,1,7);
INSERT INTO alunos_disciplinas(idDisciplina, idAlunos, media) VALUES (3,2,8.5);
INSERT INTO alunos_disciplinas(idDisciplina, idAlunos, media) VALUES (3,7,7);
INSERT INTO alunos_disciplinas(idDisciplina, idAlunos, media) VALUES (3,8,4);
INSERT INTO alunos_disciplinas(idDisciplina, idAlunos, media) VALUES (3,9,5);
INSERT INTO alunos_disciplinas(idDisciplina, idAlunos, media) VALUES (3,1,2);
INSERT INTO alunos_disciplinas(idDisciplina, idAlunos, media) VALUES (3,1,1);
INSERT INTO alunos_disciplinas(idDisciplina, idAlunos, media) VALUES (3,1,5);
INSERT INTO alunos_disciplinas(idDisciplina, idAlunos, media) VALUES (4,1,7);
INSERT INTO alunos_disciplinas(idDisciplina, idAlunos, media) VALUES (4,2,8);
INSERT INTO alunos_disciplinas(idDisciplina, idAlunos, media) VALUES (4,3,8);
INSERT INTO alunos_disciplinas(idDisciplina, idAlunos, media) VALUES (4,4,8);
INSERT INTO alunos_disciplinas(idDisciplina, idAlunos, media) VALUES (4,7,8.5);
INSERT INTO alunos_disciplinas(idDisciplina, idAlunos, media) VALUES (4,8,7.5);
INSERT INTO alunos_disciplinas(idDisciplina, idAlunos, media) VALUES (4,9,7);
INSERT INTO alunos_disciplinas(idDisciplina, idAlunos, media) VALUES (4,1,6);
INSERT INTO alunos_disciplinas(idDisciplina, idAlunos, media) VALUES (5,1,5);
INSERT INTO alunos_disciplinas(idDisciplina, idAlunos, media) VALUES (5,8,4);
INSERT INTO alunos_disciplinas(idDisciplina, idAlunos, media) VALUES (5,9,3);
INSERT INTO alunos_disciplinas(idDisciplina, idAlunos, media) VALUES (5,1,10);
/*
1 - Cadastrar um aluno ("Guilherme Guimarães", 17)
2 - Matricular ele na disciplina "Geografia"
3 - Listar todos os alunos que são maior de idade
4 - Listar os alunos que tem idade entre 15 e 20 anos
*/

insert into alunos(nome, idade) values('Guilherme Guimarães',17);

select * from disciplinas;
select * from alunos;

insert into alunos_disciplinas(idDisciplina, idAlunos) values(2,14);

select * from alunos
where idade > 17;

select * from alunos
where idade > 14 and idade < 21; /* WHERE idade BETWEEN 15 AND 20;*/

/*--------------------*/
/* PUXAR SOMENTE 5 PRIMEIROS VALORES*/
select * FROM alunos
LIMIT 5;

/* PUXAR OS 5 PRIMEIROS E PULAR O PRIMEIRO*/
select * FROM alunos
LIMIT 5
OFFSET 1;

/* GROUP BY */
SELECT d.nome, COUNT(*) as quantidade FROM alunos /* COUNT conta e o as é o nome que a coluna tera*/
INNER JOIN alunos_disciplinas ad ON ad.idAlunos = alunos.id
INNER JOIN disciplinas d ON d.id = ad.idDisciplina
/*poderia adicionar where aqui para fazer pesquisa especifica*/
GROUP BY d.nome; /*quando faz o group by somente essa informação pode ser acessada*/

