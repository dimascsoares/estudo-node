/* global __dirname */
/* global process */
var favicon = require('serve-favicon');
var express = require('express');
var path = require('path');
var app = express();

// instancia rotas principais
var index = require('./routes/route-index');
var usuarios = require('./routes/route-usuarios');
var produtos = require('./routes/route-produtos');
var empresas = require('./routes/route-empresas');

// configura view engine (jade)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// configura diretório public, onde estão css e imagens
app.use(express.static(path.join(__dirname, '/public')));
app.use(favicon(path.join(__dirname, 'public/img', 'favicon.ico')));

// configura rotas
app.use('/', index);
app.use('/usuarios', usuarios);
app.use('/produtos', produtos);
app.use('/empresas', empresas);


// configura rota para tratamento do erro 404. TEM QUE SER A ÚLTIMA ROTA A SER DEFINIDA!
app.use(function (req, res, next) {
	res.render('base/erro404.jade', { titulo: "Página não encontrada " });
});

app.listen(process.env.VCAP_APP_PORT || 3000);