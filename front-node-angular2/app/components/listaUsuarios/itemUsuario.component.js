"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var usuario_1 = require('../../models/usuario');
var listaUsuariosService_1 = require('./listaUsuariosService');
var ItemUsuarioComponent = (function () {
    function ItemUsuarioComponent(service) {
        var _this = this;
        this.service = service;
        this.cssClass = "list-group-item";
        this.onLimparSelecao = service.limparSelecao$.subscribe(function (x) { return _this.limparSelecao(); });
    }
    ItemUsuarioComponent.prototype.obterStringEmpresas = function (usuario) {
        return usuario.Empresas.map(function (e) { return e.Nome; }).join(', ');
    };
    ItemUsuarioComponent.prototype.selecionarUsuario = function (usuario) {
        this.service.usuarioSelecionado(usuario);
        this.cssClass = "list-group-item active";
    };
    ItemUsuarioComponent.prototype.limparSelecao = function () {
        this.cssClass = "list-group-item";
    };
    ItemUsuarioComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.onLimparSelecao.unsubscribe();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', usuario_1.Usuario)
    ], ItemUsuarioComponent.prototype, "usuario", void 0);
    ItemUsuarioComponent = __decorate([
        core_1.Component({
            selector: 'item-Usuario',
            template: "\n    <input type=\"hidden\" id=\"hidden{{usuario.Id}}\" />\n    <a id=\"{{usuario.Id}}\" href=\"#\" class=\"{{cssClass}}\" (click)=\"selecionarUsuario(usuario)\">\n    <h4 class=\"list-group-item-heading\">{{usuario.Nome + \" \" + usuario.Sobrenome}}</h4>\n    <p>\n        <b>E-mail:</b> {{usuario.Email}}<br />\n        <b>Empresas:</b> {{obterStringEmpresas(usuario)}}\n    </p>\n    </a>\n  "
        }), 
        __metadata('design:paramtypes', [listaUsuariosService_1.ListaUsuariosService])
    ], ItemUsuarioComponent);
    return ItemUsuarioComponent;
}());
exports.ItemUsuarioComponent = ItemUsuarioComponent;
//# sourceMappingURL=itemUsuario.component.js.map