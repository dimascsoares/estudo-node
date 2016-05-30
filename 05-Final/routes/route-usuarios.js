var express = require('express');
var router = express.Router();

var dadosUsuarios = 
    { 
        usuarios: 
        [
            {
                Id : "7bf3e72c-e2bb-4cc4-8da5-dd235ae9032c",
                Nome : "Bill",
                Sobrenome : "Gates",
                Email : "bill@microsoft.com",
                Empresas : [{Nome:"Microsoft"}]
            },
            {
                Id : "fde0dcc4-49dc-4340-a6fb-8da98c07479b",
                Nome : "Steve",
                Sobrenome : "jobs",
                Email : "jobs@apple.com",
                Empresas : [{Nome:"Apple"}, {Nome:"Beats by Dre"}]
            },
            {
                Id : "69e804ff-0273-4b62-9305-95ad18bb9d93",
                Nome : "Mark",
                Sobrenome : "Zuckerberg",
                Email : "zuckerberg@facebook.com",
                Empresas : [{Nome:"Whatsapp"}, {Nome:"Facebook"}, {Nome:"Instagram"}]
            },
            {
                Id : "7e8ed69a-4286-4015-a0f6-eb8778b5768a",
                Nome : "Larry",
                Sobrenome : "Page",
                Email : "lpage@google.com",
                Empresas : [{Nome:"Google"}, {Nome:"Alphabet"}, {Nome:"Youtube"}, {Nome:"Boston Dynamics"}]
            },
            {
                Id : "2cb62f5b-17aa-43c8-837c-cb3bd1a6e9bb",
                Nome : "Elon",
                Sobrenome : "Musk",
                Email : "musk@tesla.com",
                Empresas : [{Nome:"Tesla"}, {Nome:"Space X"}]
            }
        ]
    };

router.get('/', function (req, res, next) {
    res.render('usuarios', {titulo: "Usuários"});
});

router.get('/obterListaUsuarios/', function (req, res, next) {
    res.render('usuarios/lista-usuarios', dadosUsuarios);
});

router.get('/obterUsuario/:id', function (req, res, next) {
    var usuario;
    for(var usuario of dadosUsuarios.usuarios) {
        if (usuario["Id"] == req.params.id) {
            res.json(usuario);
            return;
        }
    }
    res.json({});
    return;
});

module.exports = router;