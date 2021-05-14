/*

Criar uma função que retorne o calculo de salario com base nas horas de um empregado

Multiplicar o valor/hora pela quantidade de horas trabalhadas no mês

*/

function calcularSalario(quantidade, valorHora)
{
    return quantidade * valorHora
}

//console.log(calcularSalario(100, 2.50))


const funcionario = {
    nome: 'Felipe',
    quantidade: 150,
    valorHora: 10
}

function calculoDeSalario(peao)
{
    return peao.quantidade * peao['valorHora']
}

//console.log(calculoDeSalario(funcionario))


// Criar uma função para saber se uma pessoa é maior de idade ou não
const pessoa = {
    ano: 1990,
    nome:'Felipe'
}

function maiorDeIdade(pessoa)
{
    let idade = 2021 - pessoa.ano

    if(idade < 18)
    {
        return 'É de menor.'
    }
    else
    {
        return 'É de Maior'
    }
}

console.log(maiorDeIdade(pessoa))