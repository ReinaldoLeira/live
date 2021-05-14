/*
1. Crie uma função que receba dois parâmetros (numero1, numero2) e retorne o maior entre eles.
2. Crie uma função que receba tres parâmetros (numero1, numero2, numero3) e retorne o maior entre eles.
3. Na geometria existem três tipos de triângulos que são categorizados conforme os seus lados
  - Equilatero (3 lados iguais)
  - Isósceles (2 lados iguais)
  - Escaleno (0 lados iguais)
Crie uma função que receba como parâmetro os três lados do triangulo e retorne qual o tipo dele. Exemplo:
tipoTriangulo(1, 4, 4) // retorna isósceles 
4. Crie uma função chamada imprimirTabuada(numero) e faça com que ela imprima a tabuada de multiplicação do número passado como parâmetro.
5. Crie uma função chamada cadastraProduto(nome, valor).
Dica: Use um array fora da function e adicione o objeto dentro dele.
*/

//1. Crie uma função que receba dois parâmetros (numero1, numero2) e retorne o maior entre eles.
function maiorDeDois(numero1, numero2)
{
    if(numero1 > numero2)
    {
        return numero1
    }
    else
    {
        return numero2
    }
}
//console.log(maiorDeDois(8,7))

//2. Crie uma função que receba tres parâmetros (numero1, numero2, numero3) e retorne o maior entre eles.
function maiorDeTres(numero1, numero2, numero3)
{
    if(numero1 >= numero2 && numero1 >= numero3)
    {
        return numero1
    }
    else if(numero2 >= numero1 && numero2 >= numero3)
    {
        return numero2
    }
    else
    {
        return numero3
    }
}
//outra solução
function maior(numero1, numero2, numero3)
{
		let numeroMaior
		
		if(numero1 > numero2)
		{
			numeroMaior = numero1
		}
		else
		{
			numeroMaior = numero2
		}
		if(numero3 > numeroMaior)
		{
			numeroMaior = numero3
		}
		return numeroMaior
}

//console.log(maiorDeTres(7, 9, 9))

/*
3. Na geometria existem três tipos de triângulos que são categorizados conforme os seus lados
  - Equilatero (3 lados iguais)
  - Isósceles (2 lados iguais)
  - Escaleno (0 lados iguais)
Crie uma função que receba como parâmetro os três lados do triangulo e retorne qual o tipo dele. Exemplo:*/
function triangulo(lado1, lado2, lado3)
{
    if(lado1 === lado2 && lado1 === lado3)
    {
        return 'Equilatero'
    }
    else if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3)
    {
        return 'Isósceles'
    }
    else
    {
        return 'Escaleno'
    }
}
//console.log(triangulo(3,2,1))

//4. Crie uma função chamada imprimirTabuada(numero) e faça com que ela imprima a tabuada de multiplicação do número passado como parâmetro.
function tabuada(numero)
{
    for(let i = 1; i <= 10; i++)
    console.log(i * numero)// \n no console.log pula linha
}

//tabuada(7)

/*
5. Crie uma função chamada cadastraProduto(nome, valor).
Dica: Use um array fora da function e adicione o objeto dentro dele.*/
let produto = []

function cadastraProduto(nome, valor)
{
    produto.push({nome: nome, valor: valor})
}
cadastraProduto('Muppy', 1.99)
cadastraProduto('Leite', 6.30)
cadastraProduto('Monster', 6.99)
//console.log(produto)