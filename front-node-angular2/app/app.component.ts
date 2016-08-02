import { Component } from '@angular/core';
import { UsuarioItemLista } from './components/listaUsuarios/usuarioItemMap';
import { ClasseItem } from './shared/listaRegistros/classeItem';
import { ListaRegistrosService } from './shared/listaRegistros/listaRegistrosService';
import { ListaRegistrosComponent } from './shared/listaRegistros/listaRegistros.component';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template:`
  <h1>{{title}}</h1>
  <lista-Registros [registros]="registros"></lista-Registros>
  <h2>{{usuarioSelecionado.Nome}} details!</h2>
  <div><label>ID: </label>{{usuarioSelecionado.Id}}</div>
  <div>
    <label>Nome: </label>
    <input [(ngModel)]="usuarioSelecionado.Nome" placeholder="Nome" (keyup)="validarUsuario()" required>
  </div>
  `,
  directives: [ListaRegistrosComponent],
  providers: [ListaRegistrosService]
})
export class AppComponent {

  title = "Tour of Heroes";
  usuarioSelecionado: UsuarioItemLista;

  constructor(private service: ListaRegistrosService){
    try{
    this.usuarioSelecionado = new UsuarioItemLista();
    service.itemSelecionado$.subscribe(usuario => this.usuarioSelecionado = <UsuarioItemLista>usuario);
    } catch (ex) {console.log(ex);}
  }

  validarUsuario(){
    if (!this.usuarioSelecionado.Nome.trim())
      this.service.configurarErro(this.usuarioSelecionado);
    else
      this.service.removerErro({ item: this.usuarioSelecionado, classeItem: ClasseItem.selecionado })
  }

  registros: UsuarioItemLista[] = 
  [
    new UsuarioItemLista (
        "7bf3e72c-e2bb-4cc4-8da5-dd235ae9032c",
        "Bill",
        "Gates",
        "bill@microsoft.com",
        [{Nome:"Microsoft"}]
    ),
    new UsuarioItemLista (
        "fde0dcc4-49dc-4340-a6fb-8da98c07479b",
        "Steve",
        "jobs",
        "jobs@apple.com",
        [{Nome:"Apple"}, {Nome:"Beats by Dre"}]
    ),
    new UsuarioItemLista (
        "69e804ff-0273-4b62-9305-95ad18bb9d93",
        "Mark",
        "Zuckerberg",
        "zuckerberg@facebook.com",
        [{Nome:"Whatsapp"}, {Nome:"Facebook"}, {Nome:"Instagram"}]
    ),
    new UsuarioItemLista (
        "7e8ed69a-4286-4015-a0f6-eb8778b5768a",
        "Larry",
        "Page",
        "lpage@google.com",
        [{Nome:"Google"}, {Nome:"Alphabet"}, {Nome:"Youtube"}, {Nome:"Boston Dynamics"}]
    ),
    new UsuarioItemLista (
        "2cb62f5b-17aa-43c8-837c-cb3bd1a6e9bb",
        "Elon",
        "Musk",
        "musk@tesla.com",
        [{Nome:"Tesla"}, {Nome:"Space X"}]
    )
  ];
}