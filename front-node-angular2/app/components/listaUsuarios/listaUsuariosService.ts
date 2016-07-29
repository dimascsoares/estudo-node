import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Usuario } from '../../models/usuario';

@Injectable()
export class ListaUsuariosService {

    private usuarioSelecionadoSource = new Subject<Usuario>();
    private limparSelecaoSource = new Subject();

    usuarioSelecionado$ = this.usuarioSelecionadoSource.asObservable();
    limparSelecao$ = this.limparSelecaoSource.asObservable();

    usuarioSelecionado(usuario:Usuario){
        this.usuarioSelecionadoSource.next(usuario);
    }

    limparSelecao(){
        this.limparSelecaoSource.next(null);
    }
}