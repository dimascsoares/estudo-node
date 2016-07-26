var path = require('path');
var http = require('http');
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader(path.join(global.appRoot, '/config/properties.file'));

var BaseController = {
    http: http,
    getOptions: getOptions,
    executePost: function (req, path, callbackSucesso){
        processaPost(req, function (post) {
            var options = getOptions(path, 'POST', 'application/x-www-form-urlencoded; charset=UTF-8', post);
            var request = http.request(options, function(httpres) {
                httpres.setEncoding('utf8');
                httpres.on('data', function (dados) {
                    dadosUsuarios = JSON.parse(dados);
                });
                httpres.on('end', function () {
                    if (dadosUsuarios.Erro)
                        res.send(dadosUsuarios);
                    else
                        if (callbackSucesso)
                            callbackSucesso(dadosUsuarios);
                });
            });

            request.write(post);
            request.end();
        });
    },
    
};

function getOptions(path, method, contentType, body){
        return  {
                    host: properties.get('business.url'),
                    port: properties.get('business.port'),
                    path: path,
                    method: method,
                    headers: {
                        'Content-Type': (contentType) ? contentType : 'text',
                        'Content-Length': (body) ? Buffer.byteLength(body) : 0
                    }
                };
    };

function processaPost(req, callbackPost){
        //Obtém os dados transmitidos no post do formulário
        var body = '';
        req.on('data', function(data){
            body += data;
        });
        req.on('end', function(){
            callbackPost(body);
        });
    };

module.exports = BaseController;