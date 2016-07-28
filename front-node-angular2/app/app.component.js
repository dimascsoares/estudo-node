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
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var Empresa = (function () {
    function Empresa() {
    }
    return Empresa;
}());
exports.Empresa = Empresa;
var Usuario = (function () {
    function Usuario(id, nome, sobrenome, email, empresas) {
        this.Id = id;
        this.Nome = nome;
        this.Sobrenome = sobrenome;
        this.Email = email;
        this.Empresas = empresas;
    }
    Usuario.prototype.obterStringEmpresas = function () {
        return this.Empresas.map(function (e) { return e.Nome; }).join(', ');
    };
    return Usuario;
}());
exports.Usuario = Usuario;
var AppComponent = (function () {
    function AppComponent() {
        this.usuarios = [
            new Usuario("7bf3e72c-e2bb-4cc4-8da5-dd235ae9032c", "Bill", "Gates", "bill@microsoft.com", [{ Nome: "Microsoft" }]),
            new Usuario("fde0dcc4-49dc-4340-a6fb-8da98c07479b", "Steve", "jobs", "jobs@apple.com", [{ Nome: "Apple" }, { Nome: "Beats by Dre" }]),
            new Usuario("69e804ff-0273-4b62-9305-95ad18bb9d93", "Mark", "Zuckerberg", "zuckerberg@facebook.com", [{ Nome: "Whatsapp" }, { Nome: "Facebook" }, { Nome: "Instagram" }]),
            new Usuario("7e8ed69a-4286-4015-a0f6-eb8778b5768a", "Larry", "Page", "lpage@google.com", [{ Nome: "Google" }, { Nome: "Alphabet" }, { Nome: "Youtube" }, { Nome: "Boston Dynamics" }]),
            new Usuario("2cb62f5b-17aa-43c8-837c-cb3bd1a6e9bb", "Elon", "Musk", "musk@tesla.com", [{ Nome: "Tesla" }, { Nome: "Space X" }])
        ];
        this.title = "Tour of Heroes";
        this.hero = {
            id: 1,
            name: "Windstorm"
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <h1>{{title}}</h1>\n  <div class=\"list-group\">\n    <div *ngFor=\"let usuario of usuarios\">\n      <input type=\"hidden\" id=\"hidden{{usuario.Id}}\"  />\n      <a id=\"{{usuario.Id}}\" href=\"#\" class=\"list-group-item\">\n        <h4 class=\"list-group-item-heading\">{{usuario.Nome + \" \" + usuario.Sobrenome}}</h4>\n        <p>\n          <b>E-mail:</b> {{usuario.Email}}<br />\n          <b>Empresas:</b> {{usuario.obterStringEmpresas()}}\n        </p>\n      </a>\n    </div>\n  </div>\n  <h2>{{hero.name}} details!</h2>\n  <div><label>id: </label>{{hero.id}}</div>\n  <div>\n    <label>name: </label>\n    <input [(ngModel)]=\"hero.name\" placeholder=\"name\">\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map