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
var listaUsuariosService_1 = require('./listaUsuariosService');
var itemUsuario_component_1 = require('./itemUsuario.component');
var ListaUsuariosComponent = (function () {
    function ListaUsuariosComponent(service) {
        this.service = service;
        service.usuarioSelecionado$.subscribe(function (usuario) { return service.limparSelecao(); });
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ListaUsuariosComponent.prototype, "usuarios", void 0);
    ListaUsuariosComponent = __decorate([
        core_1.Component({
            selector: 'lista-Usuarios',
            templateUrl: 'app/components/listaUsuarios/listaUsuarios.component.html',
            directives: [itemUsuario_component_1.ItemUsuarioComponent]
        }), 
        __metadata('design:paramtypes', [listaUsuariosService_1.ListaUsuariosService])
    ], ListaUsuariosComponent);
    return ListaUsuariosComponent;
}());
exports.ListaUsuariosComponent = ListaUsuariosComponent;
//# sourceMappingURL=listaUsuarios.component.js.map