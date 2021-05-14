//1.	Faça um Programa que mostre a mensagem "Alo mundo" na tela.
function saudar()
{
    console.log('Alo mundo')
}
console.log('saudar')
saudar()

//2.	Faça um Programa armazena dois números e imprime a soma.
function somar(a = 0, b = 0)
{
    return a + b
}

console.log('somar')
console.log(somar(5, 2))

//3.	Faça um Programa com 4 notas bimestrais e mostre a média.
function media(nota1 = 0, nota2 = 0, nota3 = 0, nota4 = 0)
{
    return (nota1 + nota2 + nota3 + nota4) / 4
}

console.log('media')
console.log(media(5, 7, 8, 6))

//4.	Faça um Programa que converta metros para centímetros.
const metroParaCm = (metro = 0) =>
{
    return metro * 100
}

console.log('metroParaCm')
console.log(metroParaCm(2) + 'cm')

/*5.	Faça um Programa com três números. Calcule e mostre:
    1.	o produto do dobro do primeiro com metade do segundo.
    2.	a soma do triplo do primeiro com o terceiro.
    3.	o terceiro elevado ao cubo.*/
const calculos = function(a = 0, b = 0, c = 0)
{
    console.log('o produto do dobro do primeiro com metade do segundo.')
    console.log((a * 2) * (b / 2))

    console.log('a soma do triplo do primeiro com o terceiro.')
    console.log((a * 3) + c)

    console.log('o terceiro elevado ao cubo.')
    console.log(c ** 3)
}

calculos(5, 4, 5)

//6.	Tendo como dados à altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58
function pesoIdeal(h = 0)
{
    return (72.7 * h) - 58
}

console.log('pesoIdeal')
console.log(pesoIdeal(1.85) + 'kg')

/*7.	Tendo como dado à altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
     1.	Para homens: (72.7*h) - 58
     2.	Para mulheres: (62.1*h) - 44.7*/

function pesoPorSexo(h = 0, masculino)
{
    if(masculino)
    {
        console.log('peso ideal homem')
        return (72.7 * h) - 58
    }
    else if(masculino === false)
    {
        console.log('peso ideal mulher')
        return (62.1 * h) - 44.7
    }
    else
    {
        console.log('peso ideal generico')
        return pesoIdeal(h)
    }
}

console.log(pesoPorSexo(1.85, true) + 'kg')
console.log(pesoPorSexo(1.85, false) + 'kg')
console.log(pesoPorSexo(1.85) + 'kg')