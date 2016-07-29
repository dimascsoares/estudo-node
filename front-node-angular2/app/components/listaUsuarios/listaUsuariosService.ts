import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Usuario } from '../../models/usuario';
import { ClasseItem } from './classeItem';
import { ConfiguracaoItem } from './configuracaoItem';

@Injectable()
export class ListaUsuariosService {

    private usuarioSelecionadoSource = new Subject<Usuario>();
    private removerErroSource = new Subject<ConfiguracaoItem>();
    private configurarErroSource = new Subject<Usuario>();
    private limparSelecaoSource = new Subject();

    usuarioSelecionado$ = this.usuarioSelecionadoSource.asObservable();
    removerErro$ = this.removerErroSource.asObservable();
    configurarErro$ = this.configurarErroSource.asObservable();
    limparSelecao$ = this.limparSelecaoSource.asObservable();

    usuarioSelecionado(usuario: Usuario){
        this.usuarioSelecionadoSource.next(usuario);
    }

    limparSelecao(){
        this.limparSelecaoSource.next(null);
    }

    configurarErro(usuario: Usuario){
        this.configurarErroSource.next(usuario);
    }

    removerErro(configuracao: ConfiguracaoItem){
        this.removerErroSource.next(configuracao);
    }
}