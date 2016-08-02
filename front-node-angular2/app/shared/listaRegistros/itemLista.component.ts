import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import { ItemLista } from './itemLista';
import { ClasseItem } from './classeItem';
import { ConfiguracaoItem } from './configuracaoItem';
import { MapToIterable } from './mapToIterable';
import { ListaRegistrosService } from './listaRegistrosService';

@Component({
  selector: 'item-Lista',
  templateUrl: 'app/shared/listaRegistros/itemLista.component.html',
  styleUrls: ['app/shared/listaRegistros/itemLista.component.css'],
  pipes: [MapToIterable]
})
export class ItemListaComponent implements OnDestroy {
    @Input() item: ItemLista;
    onLimparSelecao: Subscription;
    onConfigurarErro: Subscription;
    onRemoverErro: Subscription;
    contemErros: boolean = false;
    classeItem: ClasseItem = ClasseItem.normal;

    constructor(private service: ListaRegistrosService){
        this.onLimparSelecao = service.limparSelecao$.subscribe(x => this.limparSelecao());
        this.onConfigurarErro = service.configurarErro$.subscribe(item => this.configurarErro(item));
        this.onRemoverErro = service.removerErro$.subscribe(config => this.removerErro(config));
    }

    selecionarItem(item:ItemLista){
        this.service.itemSelecionado(item);
        this.configuraClasseItem(ClasseItem.selecionado);
    }

    limparSelecao(){
        this.configuraClasseItem(ClasseItem.normal);
    }

    configurarErro(item:ItemLista){
        if (this.item == item) {
            this.contemErros = true;
            this.classeItem = ClasseItem.erro;
        }
    }

    removerErro(configuracao: ConfiguracaoItem){
        if (this.item == configuracao.item) {
            this.contemErros = false;
            this.classeItem = configuracao.classeItem;
        }
    }

    private configuraClasseItem(classe: ClasseItem){
        if (!this.contemErros)
            this.classeItem = classe;
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.onLimparSelecao.unsubscribe();
        this.onConfigurarErro.unsubscribe();
        this.onRemoverErro.unsubscribe();
    }
}

