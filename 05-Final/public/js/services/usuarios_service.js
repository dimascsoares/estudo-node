Module("Estudo.NodeJs.Controllers.UsuariosService", function (UsuariosService) {
    UsuariosService.fn.initialize = function () { };

    UsuariosService.fn.obterListaUsuarios = function (e) {
        return Estudo.ajax.get("/Usuarios/obterListaUsuarios", { dataType: "html" });
    };

    UsuariosService.fn.salvarUsuario = function (usuario) {
        return Estudo.ajax.post("/Usuarios/salvarUsuario", { data: usuario });
    };

    UsuariosService.fn.excluirUsuario = function (usuario) {
        return Estudo.ajax.post("/Usuarios/excluirUsuario", { data: usuario });
    };
});