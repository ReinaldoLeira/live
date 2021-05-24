var express = require('express');
var router = express.Router();
var indexController = require('../controller/indexController')
var auth = require('../middlewares/auth')


/* GET home page. */
router.get('/', indexController.index);

router.post('/cadastrar', indexController.cadastrar)

router.get('/login', indexController.login);

router.post('/logar', indexController.logar);

router.get('/logado', auth, indexController.logado); 

module.exports = router;
