var express = require('express');
var router = express.Router();

var BaseController = require('./baseController.js');
var baseController = Object.create(BaseController);

router.get('/', function (req, res, next) {
    //Renderiza a página de usuários
    res.render('usuarios', {titulo: "Usuários"});
});

router.get('/obterListaUsuarios/', function (req, res, next) {
    executaAcao('/Usuarios/obterListaUsuarios', 'GET', res);
});

router.post('/excluirUsuario/', function (req, res) {
    //executaAcao('/Usuarios/excluirUsuario', 'POST', res);
    baseController.executePost(req, '/Usuarios/excluirUsuario', 
        {
            sucesso: function (dadosUsuarios) {
                //Renderiza a lista de usuários atualizada
                res.render('usuarios/lista-usuarios', dadosUsuarios);
            },
            falha: function (erro) { res.send(erro); }
        });
});

router.post('/salvarUsuario/', function (req, res) {
    baseController.executePost(req, '/Usuarios/salvarUsuario', 
        {
            sucesso: function (dadosUsuarios) {
                //Renderiza a lista de usuários atualizada
                res.render('usuarios/lista-usuarios', dadosUsuarios.listaUsuariosAtualizada, function (err, html) {
                    //Monta a response informando os dados do usuário salvo e a lista atualizada
                    var response = { usuarioSalvo : dadosUsuarios.usuarioSalvo, listaUsuariosAtualizada : html };
                    res.send(response);
                });
            },
            falha: function (erro) { res.send(erro); }
        });
});

function executaAcao(path, method, res){
    var options = baseController.getOptions(path, method);
    baseController.http.request(options, function(httpres) {
        httpres.setEncoding('utf8');
        httpres.on('data', function (dadosUsuarios) {
            //Renderiza a lista de usuários cadastrados
            res.render('usuarios/lista-usuarios', JSON.parse(dadosUsuarios));
        });
    }).end();
}

module.exports = router;