var express = require('express');
var router = express.Router();
var indexController = require('../controller/indexController')

/* GET home page. */
router.get('/', indexController.index);

router.post('/cadastrar', indexController.cadastrar)

router.get('/login', indexController.login);

router.post('/logar', indexController.logar);

router.get('/logado', indexController.logado); 

module.exports = router;
