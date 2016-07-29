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
var usuario_1 = require('./models/usuario');
var classeItem_1 = require('./components/listaUsuarios/classeItem');
var listaUsuariosService_1 = require('./components/listaUsuarios/listaUsuariosService');
var listaUsuarios_component_1 = require('./components/listaUsuarios/listaUsuarios.component');
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
        this.title = "Tour of Heroes";
        this.usuarios = [
            new usuario_1.Usuario("7bf3e72c-e2bb-4cc4-8da5-dd235ae9032c", "Bill", "Gates", "bill@microsoft.com", [{ Nome: "Microsoft" }]),
            new usuario_1.Usuario("fde0dcc4-49dc-4340-a6fb-8da98c07479b", "Steve", "jobs", "jobs@apple.com", [{ Nome: "Apple" }, { Nome: "Beats by Dre" }]),
            new usuario_1.Usuario("69e804ff-0273-4b62-9305-95ad18bb9d93", "Mark", "Zuckerberg", "zuckerberg@facebook.com", [{ Nome: "Whatsapp" }, { Nome: "Facebook" }, { Nome: "Instagram" }]),
            new usuario_1.Usuario("7e8ed69a-4286-4015-a0f6-eb8778b5768a", "Larry", "Page", "lpage@google.com", [{ Nome: "Google" }, { Nome: "Alphabet" }, { Nome: "Youtube" }, { Nome: "Boston Dynamics" }]),
            new usuario_1.Usuario("2cb62f5b-17aa-43c8-837c-cb3bd1a6e9bb", "Elon", "Musk", "musk@tesla.com", [{ Nome: "Tesla" }, { Nome: "Space X" }])
        ];
        this.usuarioSelecionado = new usuario_1.Usuario();
        service.usuarioSelecionado$.subscribe(function (usuario) { return _this.usuarioSelecionado = usuario; });
    }
    AppComponent.prototype.validarUsuario = function () {
        if (!this.usuarioSelecionado.Nome.trim())
            this.service.configurarErro(this.usuarioSelecionado);
        else
            this.service.removerErro({ usuario: this.usuarioSelecionado, classeItem: classeItem_1.ClasseItem.selecionado });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <h1>{{title}}</h1>\n  <lista-Usuarios [usuarios]=\"usuarios\"></lista-Usuarios>\n  <h2>{{usuarioSelecionado.Nome}} details!</h2>\n  <div><label>ID: </label>{{usuarioSelecionado.Id}}</div>\n  <div>\n    <label>Nome: </label>\n    <input [(ngModel)]=\"usuarioSelecionado.Nome\" placeholder=\"Nome\" (keyup)=\"validarUsuario()\" required>\n  </div>\n  ",
            directives: [listaUsuarios_component_1.ListaUsuariosComponent],
            providers: [listaUsuariosService_1.ListaUsuariosService]
        }), 
        __metadata('design:paramtypes', [listaUsuariosService_1.ListaUsuariosService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map