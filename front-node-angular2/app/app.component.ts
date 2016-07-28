import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

export class Empresa {
  Nome: string;
}

export class Usuario {
  Id: string;
  Nome: string;
  Sobrenome: string;
  Email: string;
  Empresas: Empresa[];

  constructor(id:string, nome:string, sobrenome:string, email:string, empresas:Empresa[]){
    this.Id = id;
    this.Nome = nome;
    this.Sobrenome = sobrenome;
    this.Email = email;
    this.Empresas = empresas;
  }

  obterStringEmpresas() {
    return this.Empresas.map(function(e){return e.Nome;}).join(', ');
  }
}

@Component({
  selector: 'my-app',
  template:`
  <h1>{{title}}</h1>
  <div class="list-group">
    <div *ngFor="let usuario of usuarios">
      <input type="hidden" id="hidden{{usuario.Id}}"  />
      <a id="{{usuario.Id}}" href="#" class="list-group-item">
        <h4 class="list-group-item-heading">{{usuario.Nome + " " + usuario.Sobrenome}}</h4>
        <p>
          <b>E-mail:</b> {{usuario.Email}}<br />
          <b>Empresas:</b> {{usuario.obterStringEmpresas()}}
        </p>
      </a>
    </div>
  </div>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="hero.name" placeholder="name">
  </div>
  `
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