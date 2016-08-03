"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var usuario_1 = require('../../models/usuario');
var UsuarioItemLista = (function (_super) {
    __extends(UsuarioItemLista, _super);
    function UsuarioItemLista(id, nome, sobrenome, email, empresas) {
        _super.call(this, id, nome, sobrenome, email, empresas);
    }
    Object.defineProperty(UsuarioItemLista.prototype, "valorPrincipal", {
        get: function () {
            return this.Nome + " " + this.Sobrenome;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsuarioItemLista.prototype, "demaisValores", {
        get: function () {
            var valores = {};
            valores["E-mail"] = this.Email;
            valores["Empresas"] = this.obterStringEmpresas();
            return valores;
        },
        enumerable: true,
        configurable: true
    });
    UsuarioItemLista.prototype.obterStringEmpresas = function () {
        return this.Empresas.map(function (e) { return e.Nome; }).join(', ');
    };
    return UsuarioItemLista;
}(usuario_1.Usuario));
exports.UsuarioItemLista = UsuarioItemLista;
//# sourceMappingURL=usuarioItemMap.js.map