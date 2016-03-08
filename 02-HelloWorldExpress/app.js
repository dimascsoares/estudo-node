/* global process */
var express = require('express');
var app = express();

app.get('/', function (request, response) {
    response.json({ message: "Este é o index da página, bem vindo!"});
});

app.get('/usuarios', function (request, response) {
    response.json({ message: "Este é a pagina de usuários!"});
});

app.get('/clientes', function (request, response) {
    response.json({ message: "Este é a pagina de clientes!"});
});

app.listen(process.env.VCAP_APP_PORT || 3000);