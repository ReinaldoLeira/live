const express = require('express');
const router = express.Router();

const array = [];

router.get('/', (req, res) => {
    res.render('lista', { receitas: array, pagina: 'lista' })
})

router.get('/nova', (req, res) => {
    res.render('criar', {pagina:'criar'})
})

router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const receitaSelecionada = array[id - 1];
    
    res.render('detalhe', { receita: receitaSelecionada, pagina: "detalhe" });
});

router.post('/', (req, res) => {
    const receitaNova = {
        id: array.length + 1,
        ...req.body
    }

    array.push(receitaNova)
    res.redirect('/receitas')
})

router.get('/lista', (req, res) => {
    res.render('lista', { receitas: array })
})

router.post('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id);    
        for(let i = array.length -1; i >= 0; i--){
        
        if(array[i].id === id)
        {
            array.splice(i,1)
            break
        }
    }
    res.redirect('/receitas');
})
module.exports = router;
