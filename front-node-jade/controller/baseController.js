var path = require('path');
var http = require('http');
var qs = require('querystring');
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader(path.join(global.appRoot, '/config/properties.file'));

var BaseController = {
    http: http,
    getOptions: getOptions,
    executePost: function (req, path, callbacks){
        processaPost(req, function (post) {
            var postData = JSON.stringify(post);
            var options = getOptions(path, 'POST', 'application/json; charset=UTF-8', postData);
            var request = http.request(options, function(httpres) {
                httpres.setEncoding('utf8');
                httpres.on('data', function (dados) {
                    dadosUsuarios = JSON.parse(dados);
                });
                httpres.on('end', function () {
                    if (callbacks)
                    {
                        if ((dadosUsuarios.Erro) && (callbacks.falha))
                            callbacks.falha(dadosUsuarios);
                        else if (callbacks.sucesso)
                            callbacks.sucesso(dadosUsuarios);
                    }
                });
            });

            request.write(postData);
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
            var post = qs.parse(body);
            callbackPost(post);
        });
    };

module.exports = BaseController;