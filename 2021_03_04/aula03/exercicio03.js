const lista = [
    {
        item: 'Bolacha',
        preco: 2.70,
        quantidade: 5
    },
    {
        item: 'Biscoita',
        preco: 1.70,
        quantidade: 2
    },
    {
        item: 'Refrigerante',
        preco: 9,
        quantidade: 1
    }
]

function calcularTotal(lista) 
{
    let resultado = 0
    for(let i = 0; i < lista.length; i++)
    {
        const itemComprado = lista[i] //Boa pratica colocar o item em uma variavel ao inves de usar o lista[i] o tempo todo
        resultado += itemComprado.preco * itemComprado.quantidade
    }
    return resultado
}

console.log(calcularTotal(lista))