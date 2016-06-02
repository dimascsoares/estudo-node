var express = require('express');
var qs      = require('querystring');
var router  = express.Router();

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
    //Renderiza a página de usuários
    res.render('usuarios', {titulo: "Usuários"});
});

router.get('/obterListaUsuarios/', function (req, res, next) {
    //Renderiza a lista de usuários cadastrados
    res.render('usuarios/lista-usuarios', dadosUsuarios);
});

router.get('/obterUsuario/:id', function (req, res, next) {
    var usuario;
    //Percorre a lista de usuários cadastrados
    for(var usuario of dadosUsuarios.usuarios) {
        if (usuario["Id"] == req.params.id) {
            //Retorna os dados do usuário encontrado
            res.json(usuario);
            return;
        }
    }
    
    //Retorna vazio caso não encontre o usuário na lista
    res.json({});
    return;
});

router.post('/salvarUsuario/', function (req, res) {
    processaPost(req, function (post) {
        //Valida se o nome está preenchido
        if (isNullOrEmpty(post.nome)){
            res.json({ Erro : "Nome do usuário é obrigatório" });
            return;
        }
        //Valida se o e-mail está preenchido
        if (isNullOrEmpty(post.email)){
            res.json({ Erro : "E-mail do usuário é obrigatório" });
            return;
        }
        
        //Verifica se é uma edição ou se está salvando um novo usuário
        var isEdicao = (!isNullOrEmpty(post.id));
        //Percorre a lista de usuários cadastrados
        for(var usuario of dadosUsuarios.usuarios) {
            //Verifica se o usuário cadastrado é o mesmo usuário em edição
            var isMesmoUsuario = ((post.email == usuario.Email) || ((post.nome == usuario.Nome) && (post.sobrenome == usuario.Sobrenome)));
            
            //Se estiver criando um novo usuário e o usuário digitado já existir, exibe um erro
            if ((!isEdicao) && isMesmoUsuario){
                res.json({ Erro : "Usuário já existente" });
                return;
            }
            //Se estiver editando, e o usuário estiver tentando editar os dados informando 
            //dados de outro usuário existente, exibe um erro
            if (isEdicao && isMesmoUsuario && (post.id !== usuario.Id)){
                res.json({ Erro : "Não é permitido alterar o nome do usuário para outro já existente" });
                return;
            }
        }
        
        //Cria objeto do usuário a ser salvo
        var usuario = 
        {
            Id : ((post.id != '') ? post.id : obterGUID()),
            Nome : post.nome,
            Sobrenome : post.sobrenome,
            Email : post.email,
            Telefone : post.telefone,
            Empresas : []
        };
        
        //Se estiver criando um novo usuário, adiciona o objeto na lista de usuários cadastrados
        if (!isEdicao)
            dadosUsuarios.usuarios.push(usuario);
        else {
            //Se for edição, modifica os dados do usuário existente
            for(var usuario of dadosUsuarios.usuarios) {
                if (post.id == usuario.Id){
                    usuario.Nome = post.nome;
                    usuario.Sobrenome = post.sobrenome;
                    usuario.Email = post.email;
                    usuario.Telefone = post.telefone;
                    break;
                }
            }
        }
        
        //Renderiza a lista de usuários atualizada
        res.render('usuarios/lista-usuarios', dadosUsuarios, function (err, html) {
            //Monta a response informando os dados do usuário salvo e a lista atualizada
            var response = { usuarioSalvo : usuario, listaUsuariosAtualizada : html };
            res.send(response);
        });
    });
});

router.post('/excluirUsuario/', function (req, res) {
    processaPost(req, function (post) {
        //Verifica se o ID do usuário a ser excluído foi informado
        if (isNullOrEmpty(post.id)){
            res.json({ Erro : "Usuário não encontrado" });
            return;
        }
        
        //Percorre a lista de usuários
        for(var i = 0; i = dadosUsuarios.length; i++)
            if (dadosUsuarios[i].Id == post.id) {
                //Remove o usuário da lista de usuários cadastrados
                dadosUsuarios = dadosUsuarios.splice(i, 1);
                break;
            }
        
        //Renderiza a lista de usuários cadastrados
        res.render('usuarios/lista-usuarios', dadosUsuarios);
    });
});

function processaPost(req, callbackPost){
    //Obtém os dados transmitidos no post do formulário
    var body = '';
    req.on('data', function(data){
        body += data;
    });
    req.on('end', function(){
        var post = qs.parse(body);
        callbackPost(post);
    });
}

function isNullOrEmpty(value) {
    return ((typeof value == 'undefined') || (!value));
}

function obterGUID(){
    //Gera um novo GUID
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

module.exports = router;