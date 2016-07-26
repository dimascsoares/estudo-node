var express = require('express');
var router = express.Router();

var BaseController = require('./baseController.js');
var baseController = Object.create(BaseController);

router.get('/', function (req, res, next) {
    var options = baseController.getOptions('/Empresas/obterListaEmpresas', 'GET');

    baseController.http.request(options, function(httpres) {
        httpres.setEncoding('utf8');
        httpres.on('data', function (dados) {
            var lista = JSON.parse(dados);
            var dadosEmpresas = { empresas: lista.empresas, titulo: "Empresas" };
            res.render('empresas', dadosEmpresas);
        });
    }).end();
});

module.exports = router;