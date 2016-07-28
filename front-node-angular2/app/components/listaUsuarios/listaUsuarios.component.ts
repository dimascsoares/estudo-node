import { Component, Input } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { ItemUsuarioComponent } from './itemUsuario.component';

@Component({
  selector: 'lista-Usuarios',
  template:`
  <div class="list-group">
    <item-Usuario *ngFor="let usuario of usuarios" [usuario]="usuario"></item-Usuario>
  </div>
  `,
  directives: [ItemUsuarioComponent]
})
export class ListaUsuariosComponent {
    @Input() usuarios: Usuario[];
}