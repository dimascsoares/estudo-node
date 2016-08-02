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
var classeItem_1 = require('./classeItem');
var mapToIterable_1 = require('./mapToIterable');
var listaRegistrosService_1 = require('./listaRegistrosService');
var ItemListaComponent = (function () {
    function ItemListaComponent(service) {
        var _this = this;
        this.service = service;
        this.contemErros = false;
        this.classeItem = classeItem_1.ClasseItem.normal;
        this.onLimparSelecao = service.limparSelecao$.subscribe(function (x) { return _this.limparSelecao(); });
        this.onConfigurarErro = service.configurarErro$.subscribe(function (item) { return _this.configurarErro(item); });
        this.onRemoverErro = service.removerErro$.subscribe(function (config) { return _this.removerErro(config); });
    }
    ItemListaComponent.prototype.selecionarItem = function (item) {
        this.service.itemSelecionado(item);
        this.configuraClasseItem(classeItem_1.ClasseItem.selecionado);
    };
    ItemListaComponent.prototype.limparSelecao = function () {
        this.configuraClasseItem(classeItem_1.ClasseItem.normal);
    };
    ItemListaComponent.prototype.configurarErro = function (item) {
        if (this.item == item) {
            this.contemErros = true;
            this.classeItem = classeItem_1.ClasseItem.erro;
        }
    };
    ItemListaComponent.prototype.removerErro = function (configuracao) {
        if (this.item == configuracao.item) {
            this.contemErros = false;
            this.classeItem = configuracao.classeItem;
        }
    };
    ItemListaComponent.prototype.configuraClasseItem = function (classe) {
        if (!this.contemErros)
            this.classeItem = classe;
    };
    ItemListaComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.onLimparSelecao.unsubscribe();
        this.onConfigurarErro.unsubscribe();
        this.onRemoverErro.unsubscribe();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ItemListaComponent.prototype, "item", void 0);
    ItemListaComponent = __decorate([
        core_1.Component({
            selector: 'item-Lista',
            templateUrl: 'app/shared/listaRegistros/itemLista.component.html',
            styleUrls: ['app/shared/listaRegistros/itemLista.component.css'],
            pipes: [mapToIterable_1.MapToIterable]
        }), 
        __metadata('design:paramtypes', [listaRegistrosService_1.ListaRegistrosService])
    ], ItemListaComponent);
    return ItemListaComponent;
}());
exports.ItemListaComponent = ItemListaComponent;
//# sourceMappingURL=itemLista.component.js.map