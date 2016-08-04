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
    //Parâmetro de entrada: objeto de item da lista
    @Input() item: ItemLista;

    //Implementação dos métodos das camadas de serviço
    onLimparSelecao: Subscription;
    onConfigurarErro: Subscription;
    onRemoverErro: Subscription;

    //Indicador de erro
    contemErros: boolean = false;
    //Classe CSS atual
    classeItem: ClasseItem = ClasseItem.normal;

    constructor(private service: ListaRegistrosService){
        //Configura a implementação dos métodos das camadas de serviço
        this.onLimparSelecao = service.limparSelecao$.subscribe(x => this.limparSelecao());
        this.onConfigurarErro = service.configurarErro$.subscribe(item => this.configurarErro(item));
        this.onRemoverErro = service.removerErro$.subscribe(config => this.removerErro(config));
    }

    //Método de chamado pelo layout ao clicar em um item da lista
    selecionarItem(item:ItemLista){
        //Informa a camada de serviço o item selecionado
        this.service.itemSelecionado(item);
        //Configura o estilo do item como selecionado
        this.configuraClasseItem(ClasseItem.selecionado);
    }

    //Limpa o estilo de item selecionado e retorna o estilo normal do item
    limparSelecao(){
        this.configuraClasseItem(ClasseItem.normal);
    }

    //Configura o estilo de erro ao item
    configurarErro(item:ItemLista){
        //Verifica se o item ao ter o erro configurado é o item atual
        if (this.item == item) {
            this.contemErros = true;
            this.classeItem = ClasseItem.erro;
        }
    }

    //Remove o estilo de erro do item
    removerErro(configuracao: ConfiguracaoItem){
        if (this.item == configuracao.item) {
            this.contemErros = false;
            this.classeItem = configuracao.classeItem;
        }
    }

    //Configura uma classe de item
    private configuraClasseItem(classe: ClasseItem){
        if (!this.contemErros)
            this.classeItem = classe;
    }

    //Remove as inscrições a camada de serviço ao apagar o item atual
    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.onLimparSelecao.unsubscribe();
        this.onConfigurarErro.unsubscribe();
        this.onRemoverErro.unsubscribe();
    }
}

