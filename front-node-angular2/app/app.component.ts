import { Component } from '@angular/core';
import { Usuario } from './models/usuario';
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
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="hero.name" placeholder="name">
  </div>
  `,
  directives: [ListaUsuariosComponent]
})
export class AppComponent {
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

  title = "Tour of Heroes";
  hero: Hero = {
    id: 1,
    name: "Windstorm"
  };
}