var express = require('express');
var router = express.Router();

var dadosProdutos = 
    { 
        produtos: 
        [
            {
                Marca : "Samsung",
                Nome : "Galaxy S6",
                Categoria : "Celular",
                Estoque : "120",
                Preco : "R$ 1999,90"
            },
            {
                Marca : "Apple",
                Nome : "iPhone 6S",
                Categoria : "Celular",
                Estoque : "50",
                Preco : "R$ 2999,90"
            },
            {
                Marca : "LG",
                Nome : "G4",
                Categoria : "Celular",
                Estoque : "20",
                Preco : "R$ 1799,90"
            },
            {
                Marca : "LG",
                Nome : "OLED 60' WebOS 2.0",
                Categoria : "Televisor",
                Estoque : "20",
                Preco : "R$ 4899,90"
            },
            {
                Marca : "Samsung",
                Nome : "Super Fast 11kg Lava/Seca Front-Load",
                Categoria : "Lava roupas",
                Estoque : "35",
                Preco : "R$ 4699,90"
            },
            {
                Marca : "Sony",
                Nome : "Playstation 4",
                Categoria : "Video game",
                Estoque : "10",
                Preco : "R$ 2499,90"
            },
            {
                Marca : "Microsoft",
                Nome : "XBox One",
                Categoria : "Video game",
                Estoque : "35",
                Preco : "R$ 2199,90"
            }
        ]
    };

router.get('/obterListaProdutos/', function (req, res, next) {
    //Renderiza a lista de usuários cadastrados
    res.json(dadosProdutos);
});

module.exports = router;