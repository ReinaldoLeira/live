const models = require('./models')

const {Op} = require('sequelize')

async function teste(){
    const alunos = await models.Aluno.findAll({
        where: {
        [Op.or]: {
            nome: {
                [Op.like]: 'João%'
            },
            idade: {
                [Op.lt]: 18
            }
        }}
    })
    console.log(alunos)
}

//teste()

async function listaDisciplina(){
    const disciplinas = await models.Disciplina.findAll()
    console.log(disciplinas)
}

listaDisciplina()