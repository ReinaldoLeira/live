function somar(a = 2, b = 0)//se eu atribuir na função ele vai usar esse valo como padrão
{
    return a + b
}

function subtrair(a = 2, b = 0)
{
    return a - b
}

console.log(somar())//vai usar o valor padrão de a
console.log(somar(5))//vai usar o valor que foi atribuido 5


/*
Outra forma de declarar a função
const somar = function(a = 2)
{
    return a
}
*/

/*
Mais Outra forma de declarar a função(arrow function)
const somar = (a = 2) => {  

    return a
}
*/

module.exports = {//exportando as funçoes
    somar: somar,
    subtrair: subtrair
}
