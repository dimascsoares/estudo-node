/* global __dirname */
/* global process */
var favicon = require('serve-favicon');
var express = require('express');
var path = require('path');
var app = express();

// instancia rotas
var index = require('./routes/route-index');
var usuarios = require('./routes/route-usuarios');
var produtos = require('./routes/route-produtos');
var empresas = require('./routes/route-empresas');

// configura view engine (jade)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// configura diretório public, onde estão css e imagens
app.use(express.static(path.join(__dirname, '/public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// configura rotas
app.use('/', index);
app.use('/usuarios', usuarios);
app.use('/produtos', produtos);
app.use('/empresas', empresas);

app.use(function (req, res, next) {
	res.render('template-erro404.jade', { titulo: "Página não encontrada " });
});

app.listen(process.env.VCAP_APP_PORT || 3000);