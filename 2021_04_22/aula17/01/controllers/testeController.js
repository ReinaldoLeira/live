module.exports.index = (req, res) => { //req = requisição    res de response module.exports informa que a funão pode ser usada fora daqui
    console.log(req.query.nome)
    res.send('Funcionouuuu')
}

const empresa ={
    '001' : {
        nome: 'Empresa do José'
    },
    '002' : {
        nome: 'Galego empreendimentos'
    },
    '003' : {
        nome: 'Camila\'s Enterprise'
    }
}

/*
module.exports.index = (req, res) => { //vai retornar um item do empresa
    res.send(empresas[req.query.cnpj])
}
*/