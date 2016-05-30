var express = require('express');
var app = express();
// assets.js
module.exports = function(assets) {
  assets.addJs(__dirname + '/public/js/**');
  assets.addJs(__dirname + '/public/vendor/**.js');
  assets.addCss(__dirname + '/public/vendor/**.css');
  assets.addCss(__dirname + '/css/**');
};