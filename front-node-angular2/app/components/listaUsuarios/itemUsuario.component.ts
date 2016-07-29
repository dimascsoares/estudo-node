import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';
import { Usuario } from '../../models/usuario';
import { ClasseItem } from './classeItem';
import { ConfiguracaoItem } from './configuracaoItem';
import { ListaUsuariosService } from './listaUsuariosService';

@Component({
  selector: 'item-Usuario',
  styleUrls: ['app/components/listaUsuarios/itemUsuario.component.css'],
  template:`
    <a id="{{usuario.Id}}" href="#" class="{{classeItem.toString()}}" (click)="selecionarUsuario(usuario)">
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
    onConfigurarErro: Subscription;
    onRemoverErro: Subscription;
    onValidarUsuario: Subscription;
    contemErros: boolean = false;
    classeItem: ClasseItem = ClasseItem.normal;

    constructor(private service: ListaUsuariosService){
        this.onLimparSelecao = service.limparSelecao$.subscribe(x => this.limparSelecao());
        this.onConfigurarErro = service.configurarErro$.subscribe(usuario => this.configurarErro(usuario));
        this.onRemoverErro = service.removerErro$.subscribe(config => this.removerErro(config));
    }

    obterStringEmpresas(usuario:Usuario) {
        return usuario.Empresas.map(function(e){return e.Nome;}).join(', ');
    }

    selecionarUsuario(usuario:Usuario){
        this.service.usuarioSelecionado(usuario);
        this.configuraClasseItem(ClasseItem.selecionado);
    }

    limparSelecao(){
        this.configuraClasseItem(ClasseItem.normal);
    }

    configurarErro(usuario: Usuario){
        if (this.usuario.Id == usuario.Id) {
            this.contemErros = true;
            this.classeItem = ClasseItem.erro;
        }
    }

    removerErro(configuracao: ConfiguracaoItem){
        if (this.usuario.Id == configuracao.usuario.Id) {
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

