const express = require('express') //informando que preciso usar o express
const app = express() //coloca o express como app

const testeController = require('./controllers/testeController') //informando que preciso do arquivo testeController.js
const alunoController = require('./controllers/alunoController')

app.get('/', testeController.index) // a "/" sozinha conta como index
app.get('/alunoAprovado', alunoController.alunoAprovado)
app.get('/alunoReprovado', alunoController.alunoReprovado)

app.listen(8080, () => { //callback para informar que esta rodando
    console.log('App listening at 8080')
}) //manda o express ficar ouvindo essa porta

