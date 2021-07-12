const apiChuckNorris = require('./externals/chucknorris')

async function executa() {
    const frase = await apiChuckNorris.obterFraseChuckNorris()
    console.log(frase)
}

executa()