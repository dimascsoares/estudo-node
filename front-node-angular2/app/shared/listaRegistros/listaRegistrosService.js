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
var Subject_1 = require('rxjs/Subject');
var ListaRegistrosService = (function () {
    function ListaRegistrosService() {
        this.itemSelecionadoSource = new Subject_1.Subject();
        this.removerErroSource = new Subject_1.Subject();
        this.configurarErroSource = new Subject_1.Subject();
        this.limparSelecaoSource = new Subject_1.Subject();
        this.itemSelecionado$ = this.itemSelecionadoSource.asObservable();
        this.removerErro$ = this.removerErroSource.asObservable();
        this.configurarErro$ = this.configurarErroSource.asObservable();
        this.limparSelecao$ = this.limparSelecaoSource.asObservable();
    }
    ListaRegistrosService.prototype.itemSelecionado = function (item) {
        this.itemSelecionadoSource.next(item);
    };
    ListaRegistrosService.prototype.limparSelecao = function () {
        this.limparSelecaoSource.next(null);
    };
    ListaRegistrosService.prototype.configurarErro = function (item) {
        this.configurarErroSource.next(item);
    };
    ListaRegistrosService.prototype.removerErro = function (configuracao) {
        this.removerErroSource.next(configuracao);
    };
    ListaRegistrosService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ListaRegistrosService);
    return ListaRegistrosService;
}());
exports.ListaRegistrosService = ListaRegistrosService;
//# sourceMappingURL=listaRegistrosService.js.map