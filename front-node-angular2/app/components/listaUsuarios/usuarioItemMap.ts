import { ItemLista } from '../../shared/listaRegistros/itemLista';
import { Usuario } from '../../models/usuario';
import { Empresa } from '../../models/empresa';

export class UsuarioItemLista extends Usuario implements ItemLista {
    
    public get valorPrincipal(): string{
        return this.Nome + " " + this.Sobrenome;
    }
    
    public get demaisValores(){
        var valores: { [campo:string]:string } = {};
        valores["E-mail"] = this.Email;
        valores["Empresas"] = this.obterStringEmpresas();
        return valores;
    }

    obterStringEmpresas() {
        return this.Empresas.map(function(e){return e.Nome;}).join(', ');
    }

    constructor(id?:string, nome?:string, sobrenome?:string, email?:string, empresas?:Empresa[]) { 
        super(id, nome, sobrenome, email, empresas);
    }
}