Module("Estudo.NodeJs.App", function (App) {
    App.fn.initialize = function () {
        Module("Estudo.eden", new Estudo.NodeJs.Eden());
        Module("Estudo.ajax", new Estudo.NodeJs.Ajax());
        Module("Estudo.mediator", new Estudo.Pubsub());
    };

    App.fn.run = function () {
        this.registerRoutes().dispatch();
    };

    App.fn.registerRoutes = function () {
        var router = new Kroton.Router();

        router.map("/", function () {
            return new Estudo.NodeJs.Controllers.HomeController();
        });

        router.map("/Usuarios", function () {
            return new Estudo.NodeJs.Controllers.UsuariosController();
        });

        return router;
    };
});

$(document).ready(function () {
    var app = new Estudo.NodeJs.App();
    app.run();
});