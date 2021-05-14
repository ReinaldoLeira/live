/*
1 - Crie uma função que calcula a média de duas notas
Exemplo: media(2, 6) // retorna 4
2 - Crie uma função que recebe um array de notas e calcula a média entre elas
Exemplo: media([10, 7, 10, 8, 4, 6]) // retorna 7.5
3 - Crie uma função que receba uma string "10,20,30,40" e some os resultados.
Dica: Use o parseInt para converter string em number
4 - Crie uma função que receba uma string e retorna ela invertida.
Exemplo: inverte('lucas')  // retorna sacul 
*/

//1 - Crie uma função que calcula a média de duas notas
//Exemplo: media(2, 6) // retorna 4

function mediaDeDuasNotas(notaA, notaB)
{
    return (notaA + notaB) / 2
}
//console.log(mediaDeDuasNotas(2, 6))


//2 - Crie uma função que recebe um array de notas e calcula a média entre elas
//Exemplo: media([10, 7, 10, 8, 4, 6]) // retorna 7.5

function mediaDeNotas(notas)
{
    let media = 0
    for(let i = 0; i < notas.length; i++) 
    {
        media += notas[i]
    }
    return media / notas.length
}
//console.log(mediaDeNotas([10, 7, 10, 8, 4, 6]))


function mediaDeNotas(notas)
{
    let media = 0
    for(let nota of notas) //percorre um por um os elementos do array(ou string) notas(for ... of )
    {
        media += nota
    }
    return media / notas.length
}

//3 - Crie uma função que receba uma string "10,20,30,40" e some os resultados.
//Dica: Use o parseInt para converter string em number

function somarString(entrada)
{
    let numeros = entrada.split(',')
    let resultado = 0

    for(let i = 0; i < numeros.length; i++)
    {
        numeros[i] = parseInt(numeros[i], 10) // transforma string em number. apos a virgula diz a base usada para o numero
        resultado += numeros[i] //para numeros quebrados usar parseFloat
    }

    return resultado
}
//console.log(somarString('10,20,30,40'))


//4 - Crie uma função que receba uma string e retorna ela invertida.
//Exemplo: inverte('lucas')  // retorna sacul 

function inverte(palavra)
{
    let resultado = ''

    for(let i = palavra.length - 1; i >= 0; i--)
    {
        resultado += palavra[i]
    }
    return resultado
}
//console.log(inverte('lucas'))

function inverter(value)
{
    return value.split('').reverse().join('')//reverse inverte uma array
}
//console.log(inverter('lucas'))
