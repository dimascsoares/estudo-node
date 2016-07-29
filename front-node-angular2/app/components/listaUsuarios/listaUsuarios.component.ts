import { Component, Input } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { ListaUsuariosService } from './listaUsuariosService';
import { ItemUsuarioComponent } from './itemUsuario.component';

@Component({
  selector: 'lista-Usuarios',
  templateUrl: 'app/components/listaUsuarios/listaUsuarios.component.html',
  directives: [ItemUsuarioComponent]
})
export class ListaUsuariosComponent {
    @Input() usuarios: Usuario[];

    constructor(private service: ListaUsuariosService){
      service.usuarioSelecionado$.subscribe(usuario => service.limparSelecao());
    }
}