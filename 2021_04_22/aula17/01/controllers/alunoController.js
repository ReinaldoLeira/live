const alunos = [
    {
        nome: 'Felipe',
        nota: 8
    },
    {
        nome: 'Maria',
        nota: 4
    },
    {
        nome: 'Joao',
        nota: 9
    }
]

module.exports.alunoAprovado = (req, res) => { //vai retornar um item do empresa
    let aux = []
    for(let aluno of alunos)    
        {
            if(aluno.nota >= 5){
                aux.push(aluno.nome)
            }            
        }
    res.send(aux)
    
}

module.exports.alunoReprovado = (req, res) => { //vai retornar um item do empresa
    let aux = []
    for(let aluno of alunos)    
        {
            if(aluno.nota < 5){
                aux.push(aluno.nome)
            }            
        }
    res.send(aux)
    
}