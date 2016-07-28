import { Empresa } from "./empresa";

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
}