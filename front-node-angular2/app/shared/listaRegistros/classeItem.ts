export class ClasseItem
{
    // boilerplate 
    constructor(public value:string){ }

    toString(): string { return this.value; }

    // values 
    static normal           = new ClasseItem("list-group-item");
    static selecionado      = new ClasseItem("list-group-item active");
    static erro             = new ClasseItem("list-group-item active itemComErro");
    static erroSelecionado  = new ClasseItem("list-group-item active itemComErroSelecionado");
}