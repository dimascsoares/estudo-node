var express = require('express');
var router = express.Router();

var BaseController = require('./baseController.js');
var baseController = Object.create(BaseController);

router.get('/', function (req, res, next) {
    var options = baseController.getOptions('/Produtos/obterListaProdutos', 'GET');

    baseController.http.request(options, function(httpres) {
        httpres.setEncoding('utf8');
        httpres.on('data', function (dados) {
            var lista = JSON.parse(dados);
            var dadosProdutos = { produtos: lista.produtos, titulo: "Produtos" };
            res.render('produtos', dadosProdutos);
        });
    }).end();
});

module.exports = router;