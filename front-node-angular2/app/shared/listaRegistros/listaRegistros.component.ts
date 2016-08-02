import { Component, Input } from '@angular/core';
import { ItemLista } from './itemLista';
import { ListaRegistrosService } from './listaRegistrosService';
import { ItemListaComponent } from './itemLista.component';

@Component({
  selector: 'lista-Registros',
  templateUrl: 'app/shared/listaRegistros/listaRegistros.component.html',
  directives: [ItemListaComponent]
})
export class ListaRegistrosComponent {
    @Input() registros: ItemLista[];

    constructor(private service: ListaRegistrosService){
      service.itemSelecionado$.subscribe(item => service.limparSelecao());
    }
}