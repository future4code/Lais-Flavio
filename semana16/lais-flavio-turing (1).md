### Exercício 1
a) A resposta da pergun é : O comando VARCHAR é usado para strings, caracteres. o DATE é usado para formatação de datas,o PRIMARY KEY define a coluna como chave primária da tabela, e o NOT NULL impede valores nulos naquele item da tabela.

b)No comando SHOW DATABASES retorna o banco de dados atual, e o SHOW TABLES retornou a tabela criada dentro do banco de dados.

c) Retornou a estrutura da tabela com os campos, tipos, chaves...

### Exercício 2
b) Error Code: 1062. Duplicate entry '002' for key 'PRIMARY' pelo fato de ter sido definido como primary, torna o item id único impossibilitando duplicatas
c) Error Code: 1136. Column count doesn't match value count at row 1,  falta valores para incluir nas colunas.
d) Error Code: 1364. Field 'name' doesn't have a default value, faltou o campo name.
e)	Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1,  faltou as "" da data
### Exercício 3
c) Todos os valores estão preenchidos, por isso retornaram null
d) Error Code: 1054. Unknown column 'nome' in 'field list, está como nome e não name.

### Todos os comandos executados até o exercício 4
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
	gender VARCHAR(6) NOT NULL
);
INSERT INTO Actor (id, name, salary, birth_date)
VALUES(
  "002",
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
SELECT * FROM Actor WHERE gender= "female";
SELECT salary FROM Actor WHERE name="Tony Ramos";
SELECT *FROM Actor WHERE gender = "invalid";
SELECT id, name, salary FROM Actor WHERE salary > "500000";
SELECT id, nome from Actor WHERE id = "002";
SELECT * from Actor WHERE gender = "female";
SELECT salary from Actor WHERE name = "Tony Ramos";
SELECT * from Actor WHERE gender = "invalid";
SELECT id, name, salary from Actor WHERE salary < 500000;
SELECT * FROM Actor WHERE name LIKE "A%" OR name LIKE "J%";
SELECT * FROM Actor WHERE salary > "300000";