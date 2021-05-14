let endereco = 'Rua dos Zeros, 400, 04111-555'.split(',') //corta a string baseada com o string dado e retorna uma array

let obj = {
    logradouro: endereco[0].trim(), //trim retira espacos vazios no inicio e fim da string
    numero: endereco[1].trim(),
    cep: endereco[2].trim()
}

console.log(obj)

console.log(endereco.join(',')) //junta os elementos do array em uma string


let alunos = 
[
    {
        nome: 'felipe'
    },
    {
        nome: 'rosangela'
    },
    {
        nome: 'reinaldo'
    },
    {
        nome: 'alexandre'
    }            
]
//indexOf não funciona com objetos, apenas array e string
for (let i = 0; i < alunos.length; i++)
{
    if(alunos[i].nome === 'alexandre')
    {
        console.log(i)
    }
}

let obj2 = {
    endereco: {
        logradouro: '',
        numero: '',
        cep: '010101'
    }
}

console.log(obj2.endereco.cep) // acessar um objeto dento de um objeto