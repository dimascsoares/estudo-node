"use strict";
var Usuario = (function () {
    function Usuario(id, nome, sobrenome, email, empresas) {
        this.Id = id;
        this.Nome = nome;
        this.Sobrenome = sobrenome;
        this.Email = email;
        this.Empresas = empresas;
    }
    return Usuario;
}());
exports.Usuario = Usuario;
//# sourceMappingURL=usuario.js.map