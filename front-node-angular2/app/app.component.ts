import { Component } from '@angular/core';
import { Usuario } from './models/usuario';
import { ClasseItem } from './components/listaUsuarios/classeItem';
import { ListaUsuariosService } from './components/listaUsuarios/listaUsuariosService';
import { ListaUsuariosComponent } from './components/listaUsuarios/listaUsuarios.component';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template:`
  <h1>{{title}}</h1>
  <lista-Usuarios [usuarios]="usuarios"></lista-Usuarios>
  <h2>{{usuarioSelecionado.Nome}} details!</h2>
  <div><label>ID: </label>{{usuarioSelecionado.Id}}</div>
  <div>
    <label>Nome: </label>
    <input [(ngModel)]="usuarioSelecionado.Nome" placeholder="Nome" (keyup)="validarUsuario()" required>
  </div>
  `,
  directives: [ListaUsuariosComponent],
  providers: [ListaUsuariosService]
})
export class AppComponent {

  title = "Tour of Heroes";
  usuarioSelecionado: Usuario;

  constructor(private service: ListaUsuariosService){
    this.usuarioSelecionado = new Usuario();
    service.usuarioSelecionado$.subscribe(usuario => this.usuarioSelecionado = usuario);
  }

  validarUsuario(){
    if (!this.usuarioSelecionado.Nome.trim())
      this.service.configurarErro(this.usuarioSelecionado);
    else
      this.service.removerErro({ usuario: this.usuarioSelecionado, classeItem: ClasseItem.selecionado })
  }

  usuarios: Usuario[] = 
  [
    new Usuario (
        "7bf3e72c-e2bb-4cc4-8da5-dd235ae9032c",
        "Bill",
        "Gates",
        "bill@microsoft.com",
        [{Nome:"Microsoft"}]
    ),
    new Usuario (
        "fde0dcc4-49dc-4340-a6fb-8da98c07479b",
        "Steve",
        "jobs",
        "jobs@apple.com",
        [{Nome:"Apple"}, {Nome:"Beats by Dre"}]
    ),
    new Usuario (
        "69e804ff-0273-4b62-9305-95ad18bb9d93",
        "Mark",
        "Zuckerberg",
        "zuckerberg@facebook.com",
        [{Nome:"Whatsapp"}, {Nome:"Facebook"}, {Nome:"Instagram"}]
    ),
    new Usuario (
        "7e8ed69a-4286-4015-a0f6-eb8778b5768a",
        "Larry",
        "Page",
        "lpage@google.com",
        [{Nome:"Google"}, {Nome:"Alphabet"}, {Nome:"Youtube"}, {Nome:"Boston Dynamics"}]
    ),
    new Usuario (
        "2cb62f5b-17aa-43c8-837c-cb3bd1a6e9bb",
        "Elon",
        "Musk",
        "musk@tesla.com",
        [{Nome:"Tesla"}, {Nome:"Space X"}]
    )
  ];
}