import { Component, Input } from '@angular/core';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'item-Usuario',
  template:`
    <input type="hidden" id="hidden{{usuario.Id}}" />
    <a id="{{usuario.Id}}" href="#" class="list-group-item">
    <h4 class="list-group-item-heading">{{usuario.Nome + " " + usuario.Sobrenome}}</h4>
    <p>
        <b>E-mail:</b> {{usuario.Email}}<br />
        <b>Empresas:</b> {{obterStringEmpresas(usuario)}}
    </p>
    </a>
  `
})
export class ItemUsuarioComponent {
    @Input() usuario: Usuario;

    obterStringEmpresas(usuario:Usuario) {
        return usuario.Empresas.map(function(e){return e.Nome;}).join(', ');
    }
}

