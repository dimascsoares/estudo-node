/* global process */
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (request, response) {
    response.sendFile('deviceOrientation.html', { root: __dirname });
});

app.listen(process.env.VCAP_APP_PORT || 3000);