/* global __dirname */
/* global process */
var express = require('express');
var app = express();

// instancia rotas principais
//var index = require('./routes/route-index');
var usuarios = require('./routes/route-usuarios');
var produtos = require('./routes/route-produtos');
var empresas = require('./routes/route-empresas');

// configura rotas
//app.use('/', index);
app.use('/usuarios', usuarios);
app.use('/produtos', produtos);
app.use('/empresas', empresas);

app.listen(process.env.VCAP_APP_PORT || 3000);