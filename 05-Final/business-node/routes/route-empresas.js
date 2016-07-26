var express = require('express');
var router = express.Router();

var dadosEmpresas = 
    { 
        empresas: 
        [
            {
                Nome : "IBM",
                Ativo : "Sim",
                URL : "http://www.ibm.com"
            },
            {
                
                Nome : "Microsoft",
                Ativo : "Sim",
                URL : "http://www.microsoft.com"
            },
            {
                
                Nome : "Facebook",
                Ativo : "Não",
                URL : "http://www.facebook.com"
            },
            {
                
                Nome : "Twitter",
                Ativo : "Não",
                URL : "http://www.twitter.com"
            },
            {
                
                Nome : "Google",
                Ativo : "Sim",
                URL : "http://www.google.com"
            }
        ]
    };

router.get('/obterListaEmpresas/', function (req, res, next) {
    //Renderiza a lista de usuários cadastrados
    res.json(dadosEmpresas);
});

module.exports = router;