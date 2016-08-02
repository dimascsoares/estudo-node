import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { ItemLista } from './itemLista';
import { ClasseItem } from './classeItem';
import { ConfiguracaoItem } from './configuracaoItem';

@Injectable()
export class ListaRegistrosService {

    private itemSelecionadoSource = new Subject<ItemLista>();
    private removerErroSource = new Subject<ConfiguracaoItem>();
    private configurarErroSource = new Subject<ItemLista>();
    private limparSelecaoSource = new Subject();

    itemSelecionado$ = this.itemSelecionadoSource.asObservable();
    removerErro$ = this.removerErroSource.asObservable();
    configurarErro$ = this.configurarErroSource.asObservable();
    limparSelecao$ = this.limparSelecaoSource.asObservable();

    itemSelecionado(item: ItemLista){
        this.itemSelecionadoSource.next(item);
    }

    limparSelecao(){
        this.limparSelecaoSource.next(null);
    }

    configurarErro(item: ItemLista){
        this.configurarErroSource.next(item);
    }

    removerErro(configuracao: ConfiguracaoItem){
        this.removerErroSource.next(configuracao);
    }
}