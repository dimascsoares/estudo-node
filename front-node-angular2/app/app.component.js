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
var usuarioItemMap_1 = require('./components/listaUsuarios/usuarioItemMap');
var classeItem_1 = require('./shared/listaRegistros/classeItem');
var listaRegistrosService_1 = require('./shared/listaRegistros/listaRegistrosService');
var listaRegistros_component_1 = require('./shared/listaRegistros/listaRegistros.component');
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var AppComponent = (function () {
    function AppComponent(service) {
        var _this = this;
        this.service = service;
        this.title = "Gerenciamento de Usuários";
        this.registros = [
            new usuarioItemMap_1.UsuarioItemLista("7bf3e72c-e2bb-4cc4-8da5-dd235ae9032c", "Bill", "Gates", "bill@microsoft.com", [{ Nome: "Microsoft" }]),
            new usuarioItemMap_1.UsuarioItemLista("fde0dcc4-49dc-4340-a6fb-8da98c07479b", "Steve", "jobs", "jobs@apple.com", [{ Nome: "Apple" }, { Nome: "Beats by Dre" }]),
            new usuarioItemMap_1.UsuarioItemLista("69e804ff-0273-4b62-9305-95ad18bb9d93", "Mark", "Zuckerberg", "zuckerberg@facebook.com", [{ Nome: "Whatsapp" }, { Nome: "Facebook" }, { Nome: "Instagram" }]),
            new usuarioItemMap_1.UsuarioItemLista("7e8ed69a-4286-4015-a0f6-eb8778b5768a", "Larry", "Page", "lpage@google.com", [{ Nome: "Google" }, { Nome: "Alphabet" }, { Nome: "Youtube" }, { Nome: "Boston Dynamics" }]),
            new usuarioItemMap_1.UsuarioItemLista("2cb62f5b-17aa-43c8-837c-cb3bd1a6e9bb", "Elon", "Musk", "musk@tesla.com", [{ Nome: "Tesla" }, { Nome: "Space X" }])
        ];
        try {
            this.usuarioSelecionado = new usuarioItemMap_1.UsuarioItemLista();
            service.itemSelecionado$.subscribe(function (usuario) { return _this.usuarioSelecionado = usuario; });
        }
        catch (ex) {
            console.log(ex);
        }
    }
    AppComponent.prototype.validarUsuario = function () {
        if (!this.usuarioSelecionado.Nome.trim())
            this.service.configurarErro(this.usuarioSelecionado);
        else
            this.service.removerErro({ item: this.usuarioSelecionado, classeItem: classeItem_1.ClasseItem.selecionado });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            directives: [listaRegistros_component_1.ListaRegistrosComponent],
            providers: [listaRegistrosService_1.ListaRegistrosService]
        }), 
        __metadata('design:paramtypes', [listaRegistrosService_1.ListaRegistrosService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map