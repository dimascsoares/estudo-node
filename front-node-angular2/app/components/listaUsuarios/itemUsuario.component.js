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
var classeItem_1 = require('./classeItem');
var listaUsuariosService_1 = require('./listaUsuariosService');
var ItemUsuarioComponent = (function () {
    function ItemUsuarioComponent(service) {
        var _this = this;
        this.service = service;
        this.contemErros = false;
        this.classeItem = classeItem_1.ClasseItem.normal;
        this.onLimparSelecao = service.limparSelecao$.subscribe(function (x) { return _this.limparSelecao(); });
        this.onConfigurarErro = service.configurarErro$.subscribe(function (usuario) { return _this.configurarErro(usuario); });
        this.onRemoverErro = service.removerErro$.subscribe(function (config) { return _this.removerErro(config); });
    }
    ItemUsuarioComponent.prototype.obterStringEmpresas = function (usuario) {
        return usuario.Empresas.map(function (e) { return e.Nome; }).join(', ');
    };
    ItemUsuarioComponent.prototype.selecionarUsuario = function (usuario) {
        this.service.usuarioSelecionado(usuario);
        this.configuraClasseItem(classeItem_1.ClasseItem.selecionado);
    };
    ItemUsuarioComponent.prototype.limparSelecao = function () {
        this.configuraClasseItem(classeItem_1.ClasseItem.normal);
    };
    ItemUsuarioComponent.prototype.configurarErro = function (usuario) {
        if (this.usuario.Id == usuario.Id) {
            this.contemErros = true;
            this.classeItem = classeItem_1.ClasseItem.erro;
        }
    };
    ItemUsuarioComponent.prototype.removerErro = function (configuracao) {
        if (this.usuario.Id == configuracao.usuario.Id) {
            this.contemErros = false;
            this.classeItem = configuracao.classeItem;
        }
    };
    ItemUsuarioComponent.prototype.configuraClasseItem = function (classe) {
        if (!this.contemErros)
            this.classeItem = classe;
    };
    ItemUsuarioComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.onLimparSelecao.unsubscribe();
        this.onConfigurarErro.unsubscribe();
        this.onRemoverErro.unsubscribe();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', usuario_1.Usuario)
    ], ItemUsuarioComponent.prototype, "usuario", void 0);
    ItemUsuarioComponent = __decorate([
        core_1.Component({
            selector: 'item-Usuario',
            templateUrl: 'app/components/listaUsuarios/itemUsuario.component.html',
            styleUrls: ['app/components/listaUsuarios/itemUsuario.component.css'],
        }), 
        __metadata('design:paramtypes', [listaUsuariosService_1.ListaUsuariosService])
    ], ItemUsuarioComponent);
    return ItemUsuarioComponent;
}());
exports.ItemUsuarioComponent = ItemUsuarioComponent;
//# sourceMappingURL=itemUsuario.component.js.map