//importar o bcrypt
const bcrypt = require('bcrypt')

//Cria o hash da senha de usuário
function criptograrSenha(senha) {
    const salt = bcrypt.genSaltSync(10) //criteria de aleatoridade para o bcrypt
    return bcrypt.hashSync(senha, salt)
}

//verifica se a senha do usuário é valida
function login(senha, cocozinho) {
    return bcrypt.compareSync(senha, cocozinho)
}

const cocozinho = criptograrSenha('teste')
console.log(login('teste', cocozinho))
