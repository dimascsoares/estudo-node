Module("Estudo.NodeJs.Controllers.UsuariosController", function (UsuariosController) {
    UsuariosController.fn.initialize = function () {
        this.util = new Estudo.NodeJs.Util();
        this.view = new Estudo.NodeJs.Views.Usuarios.Aba.Usuarios();
        this.service = new Estudo.NodeJs.Service.UsuariosService();
        
        //Evento de click nos itens da lista de usuários
        this.view.listaUsuarios.on('click', '.list-group-item', this.listItemClick.bind(this))
        
        this.view.btnNovoUsuario.click(this.btnNovoUsuarioClick.bind(this));
        
        this.view.btnCancelarNovoUsuario.click(this.btnCancelarNovoUsuarioClick.bind(this));
        
        this.view.btnCancelarEditarUsuario.click(this.btnCancelarEditarUsuarioClick.bind(this));
        
        this.view.btnEditarUsuario.click(this.btnEditarUsuarioClick.bind(this));
        
        this.view.btnSalvarUsuario.click(this.salvarUsuario.bind(this));
        
        this.view.btnExcluirUsuario.click(this.excluirUsuario.bind(this));

        //Carrega dados iniciais da lista de usuários
        this.carregarUsuarios();
    };

    UsuariosController.fn.listItemClick = function (e) {
        var alertWarning = 2;
        var divAlerta = this.view.divAlertaGeral;
        
        //Marca na lista o item clicado e desmarca todos os demais itens
        this.view.limparSelecaoLista();
        this.view.marcarSelecionadoLista("#" + e.currentTarget.id);
        
        var dadosUsuario = this.obterJSONUsuario(e.currentTarget.id);
        if (!jQuery.isEmptyObject(dadosUsuario))
            this.view.carregaDadosUsuarioSelecionado(dadosUsuario);
        else
            this.util.showAlert(divAlerta, "alertaGeral", alertWarning, undefined, "Usuário não encontrado");
    };

    UsuariosController.fn.obterJSONUsuario = function (idUsuario) {
        var dadosUsuario = this.view.obterIdUsuario(idUsuario);
        if (dadosUsuario == '')
            return {};

        return JSON.parse(dadosUsuario);
    };

    UsuariosController.fn.carregarUsuarios = function (e) {
        this.service.obterListaUsuarios().then(function (data) {
            this.view.carregarListaUsuarios(data);
        }.bind(this)).fail(function () { this.view.exibirListaSemResultados(); }.bind(this));
    };

    UsuariosController.fn.salvarUsuario = function (e) {     
        var alertWarning = 2;
        var divAlerta = this.view.alertaAcoesUsuario;
        var idAlerta = "alertaUsuario";
           
        //Valida se o nome está preenchido
        if (this.view.txtNome.val() == ''){
            this.util.showAlert(divAlerta, idAlerta, alertWarning, undefined, "Nome do usuário é obrigatório");
            return;
        }
        //Valida se o e-mail está preenchido
        if (this.view.txtEmail.val() == ''){
            this.util.showAlert(divAlerta, idAlerta, alertWarning, undefined, "E-mail do usuário é obrigatório");
            return;
        }

        var usuario = this.view.obterUsuarioDigitado();

        this.executaServico(this.service.salvarUsuario(usuario), function (data) {
            //Se retornou dados do usuário salvo, significa que o usuário foi salvo com sucesso
            if (typeof data.usuarioSalvo !== 'undefined'){
                //Carrega os dados do usuário salvo no form
                this.view.carregaDadosUsuarioSelecionado(data.usuarioSalvo);
                //Exibe a lista de usuários atualizada com o novo usuário
                this.view.carregarListaUsuarios(data.listaUsuariosAtualizada);

                var itemId = this.view.obterIdItemLista(data.usuarioSalvo.Id);
                //Marca o usuário como selecionado na lista
                this.view.marcarSelecionadoLista(itemId);
                //Move o scroll para o novo usuário na lista
                this.view.rolarScrollParaItem(itemId);
                //Anima o novo item na lista para chamar a atenção
                this.util.blinkControl($(itemId));

                return true;
            }
            return false;
        }.bind(this));
    };

    UsuariosController.fn.excluirUsuario = function (usuarioSelecionado) {        
        this.util.exibirConfirmacao('Exclusão de usuário', 'Tem certeza que deseja excluir o usuário?', function(modal){
            var usuario = this.view.obterUsuarioDigitado();

            this.executaServico(this.service.excluirUsuario(usuario), function (data) {
                if (data){
                    //Exibe a lista de usuários atualizada sem o usuário excluído
                    this.view.carregarListaUsuarios(data);
                    this.view.limparSelecaoLista();
                    this.view.configuraEdicaoUsuario('disabled', true);
                    return true;
                }
                return false;
            }.bind(this));

            modal.modal("hide");
        }.bind(this));
    }

    UsuariosController.fn.executaServico = function (servicePromisse, callbackSucesso) {
        var alertWarning = 2;
        var divAlerta = this.view.alertaAcoesUsuario;
        var idAlerta = "alertaUsuario";

        //Oculta alertas de erros, se houver
        this.util.hideAlert(idAlerta);
        this.view.imgLoading.fadeIn(100);

        servicePromisse.then(function (serviceResponse) {
            if (!callbackSucesso(serviceResponse)){
                //Exibe mensagens de erro
                if (typeof serviceResponse.Erro !== 'undefined')
                    this.util.showAlert(divAlerta, idAlerta, alertWarning, undefined, serviceResponse.Erro);
                else
                    this.util.showAlert(divAlerta, idAlerta, alertWarning, undefined, "Ocorreu um erro desconhecido");
            }
            this.view.imgLoading.fadeOut(250);
        }.bind(this)).fail(function () { this.util.showAlert(divAlerta, idAlerta, alertWarning, undefined, "Ocorreu um erro desconhecido"); }.bind(this));
    }

    UsuariosController.fn.btnNovoUsuarioClick = function (e) {
        this.util.hideAlert("alertaUsuario");
        this.view.configuraEdicaoUsuario('', true);
        this.inicializaEdicaoUsuario(this.view.btnCancelarNovoUsuario);
        this.view.limparSelecaoLista();
    };

    UsuariosController.fn.btnEditarUsuarioClick = function (e) {
        this.util.hideAlert("alertaUsuario");
        this.view.configuraEdicaoUsuario('', false);
        this.inicializaEdicaoUsuario(this.view.btnCancelarEditarUsuario);
    };

    UsuariosController.fn.btnCancelarEditarUsuarioClick = function (e) {
        this.util.hideAlert("alertaUsuario");
        this.view.configuraEdicaoUsuario('disabled', false);
        this.view.btnEditarUsuario.show();
        this.view.btnExcluirUsuario.show();
    };

    UsuariosController.fn.btnCancelarNovoUsuarioClick = function (e) {
        this.util.hideAlert("alertaUsuario");
        this.view.configuraEdicaoUsuario('disabled', true);
    };

    UsuariosController.fn.inicializaEdicaoUsuario = function (btnCancelar) {
        this.view.btnNovoUsuario.hide();
        this.view.btnSalvarUsuario.show();
        btnCancelar.show();
    }

    UsuariosController.fn.mouseMoveDocument = function (e) {
        var img = this.view.imgLoading;
        img.offset({
            top: e.pageY - img.outerHeight() + 30,
            left: e.pageX - (img.outerWidth() - 30)
        });
    }
});