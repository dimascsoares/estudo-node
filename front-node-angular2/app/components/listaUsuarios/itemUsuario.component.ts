import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import { Usuario } from '../../models/usuario';
import { ListaUsuariosService } from './listaUsuariosService';

@Component({
  selector: 'item-Usuario',
  template:`
    <input type="hidden" id="hidden{{usuario.Id}}" />
    <a id="{{usuario.Id}}" href="#" class="{{cssClass}}" (click)="selecionarUsuario(usuario)">
    <h4 class="list-group-item-heading">{{usuario.Nome + " " + usuario.Sobrenome}}</h4>
    <p>
        <b>E-mail:</b> {{usuario.Email}}<br />
        <b>Empresas:</b> {{obterStringEmpresas(usuario)}}
    </p>
    </a>
  `
})
export class ItemUsuarioComponent implements OnDestroy {
    @Input() usuario: Usuario;
    onLimparSelecao: Subscription;
    cssClass: string = "list-group-item";

    constructor(private service: ListaUsuariosService){
        this.onLimparSelecao = service.limparSelecao$.subscribe(x => this.limparSelecao());
    }

    obterStringEmpresas(usuario:Usuario) {
        return usuario.Empresas.map(function(e){return e.Nome;}).join(', ');
    }

    selecionarUsuario(usuario:Usuario){
        this.service.usuarioSelecionado(usuario);
        this.cssClass = "list-group-item active";
    }

    limparSelecao(){
        this.cssClass = "list-group-item";
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.onLimparSelecao.unsubscribe();
    }
}

