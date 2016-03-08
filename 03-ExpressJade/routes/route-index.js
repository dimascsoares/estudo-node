var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('template-index', { titulo: "Página Principal" });
});

module.exports = router;