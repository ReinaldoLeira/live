let frutas = ['Morango', 'Pera', 'Pessego', 'Acerola']
let legumes = ['Batata']

console.log(frutas[0])

let numeros = [5, 4, 2, 1, 0, 8, 10, 12, 14]

console.log(numeros.sort()) //organiza os itens do array
console.log(numeros.reverse()) //reverte a ordem dos itens no array
let frutasVerduras = frutas.concat(legumes) //juntas duas arrays
console.log(frutasVerduras)


//acessar um array dentro de outro array=  frutas[0][0] // acessando array posiçao 0 e o elemento no 0

for(let i = 0; i < frutas.length; i++)
{
    console.log(frutas[i])
}

for(let i = frutas.length -1; i >= 0; i--)
{
    console.log(frutas[i])
}



let pessoas = [
    {
        nome: 'Felipe'
    },
    {
        nome: 'Camila'
    },
    {
        nome: 'Reinaldo'
    }
]

for(let i = 0; i < pessoas.length; i++)
{
    console.log(pessoas[i].nome)
}