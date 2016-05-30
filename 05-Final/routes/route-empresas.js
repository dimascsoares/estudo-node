var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('empresas', 
        { empresas: [
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
        ], titulo: "Empresas"
        });
});

module.exports = router;