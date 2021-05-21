const bcrypt = require('bcrypt')
const fs = require('fs');

let arrayUsers = require('../model/index.json')

function salvarUsers(arrayUsers) {
    fs.writeFileSync(
      './model/index.json',
      JSON.stringify(arrayUsers)
    );
}

function criptograrSenha(senha) {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(senha, salt)
}

function logar(senha, hash) {
    return bcrypt.compareSync(senha, hash)
}



module.exports.index = (function(req, res, next) {
    res.render('index');
});

module.exports.login = (function(req, res, next) {
    res.render('login', {mensagem:''});
});

module.exports.logar = (function(req, res, next) {
    const userLogando = {
        ...req.body       
    }
    const userSelecionado = arrayUsers.filter((arrayUsers) => {return arrayUsers.email === userLogando.email});
    console.log(req.session)
        if(!!userSelecionado[0] && logar(userLogando.senha, userSelecionado[0].senha))
        {
            req.session.estaAutenticado = true,
            req.session.userId = userSelecionado[0].id
            res.render('logado',{user:userSelecionado[0]});
        }
        else
        {
            res.render('login',{mensagem:'E-mail ou Senha incorretos'})
        }    
});

module.exports.logado = (function(req, res, next) {
    res.render('logado');
});

module.exports.cadastrar = (function(req, res, next) {
    const userNovo = {
        id: ++arrayUsers[0],
        ...req.body
    }
    userNovo.senha = criptograrSenha(userNovo.senha)
    arrayUsers[0] = userNovo.id
    arrayUsers.push(userNovo)    
    salvarUsers(arrayUsers)
    res.redirect('login');
});