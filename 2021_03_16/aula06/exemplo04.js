const fs = require('fs')
function lerArquivo(callback) {
    fs.readFile('./2021_03_16/aula06/teste.txt', 'utf-8', (error, conteudo) => {
        console.log(conteudo)
        callback()
    })
}
lerArquivo(() => {
    console.log('Fim do programa')
})