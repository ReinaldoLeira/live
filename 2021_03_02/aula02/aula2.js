const pessoa = {
    nome: 'Felipe',
    sobrenome: 'Medeiros',
    telefone: ['111111','22222']
}

console.log(pessoa)
//para acessar um campo do objeto podemos usar pessoa.nome ou pessoa['nome']. Melhor usar o atributo (pessoa.nome)

pessoa.nome = 'Jose' //funciona pois esta mudando o atributo.

pessoa.idade = 15 //cria novo atributo dentro do objeto

console.log(pessoa)

let nome 

console.log(!!nome) // !! checa se tem valor na variavel e retorna true/false
//!! em uma variavel com "0" vai dar false como se não tivesse valor

/*
Tudo dentro de /* e* / é comentario
*/

console.log('1' + 3)
console.log('1' * 1 + 3) //Uma string numerica *1 vira number

const operacao = require('./operacoes') //criando a conexão com o modulo operacoes

console.log('Usando operacoes do modulo')
console.log(operacao.subtrair(5,3))//usando uma das operacoes do modulo