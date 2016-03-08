var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('template-usuarios', 
        { usuarios: [
            {
                Nome : "Bill",
                Sobrenome : "Gates",
                Email : "bill@microsoft.com"
            },
            {
                
                Nome : "Steve",
                Sobrenome : "jobs",
                Email : "jobs@apple.com"
            },
            {
                
                Nome : "Mark",
                Sobrenome : "Zuckerberg",
                Email : "zuckerberg@facebook.com"
            },
            {
                
                Nome : "Larry",
                Sobrenome : "Page",
                Email : "lpage@google.com"
            },
            {
                
                Nome : "Elon",
                Sobrenome : "Musk",
                Email : "musk@tesla.com"
            }
        ], titulo: "Usuários"
        });
});

module.exports = router;