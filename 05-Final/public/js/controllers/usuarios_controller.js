Module("Estudo.NodeJs.Controllers.UsuariosController", function (UsuariosController) {
    UsuariosController.fn.initialize = function () {
        this.util = new Estudo.NodeJs.Util();
        this.view = new Estudo.NodeJs.Views.Usuarios.Index();

        //Evento de click nos itens da lista de usuários
        this.view.listaUsuarios.on('click', '.list-group-item', this.listItemClick.bind(this))
        
        this.view.btnNovoUsuario.click(this.btnNovoUsuarioClick.bind(this));
        
        this.view.btnCancelarNovoUsuario.click(this.btnCancelarNovoUsuarioClick.bind(this));
        
        this.view.btnCancelarEditarUsuario.click(this.btnCancelarEditarUsuarioClick.bind(this));
        
        this.view.btnEditarUsuario.click(this.btnEditarUsuarioClick.bind(this));

        //Carrega dados iniciais da lista de usuários
        this.carregarUsuarios();
    };

    UsuariosController.fn.listItemClick = function (e) {
        var base = this;
        var alertWarning = 2;
        var divAlerta = this.view.divAlertaGeral;
        
        //Marca na lista o item clicado e desmarca todos os demais itens
        this.view.listaUsuarios.children('.list-group').children('.active').prop('class', 'list-group-item');
        e.currentTarget.className = 'list-group-item active';
        
        //Busca dados do usuário clicado na lista
        this.processaRequisicaoAJAX('/Usuarios/obterUsuario/' + e.currentTarget.id, 'json', 'Erro ao carregar dados do usuário', divAlerta, "alertaGeral", function(data) {
            if (!jQuery.isEmptyObject(data)){
                base.configuraEdicaoUsuario('disabled', true);
                base.view.btnEditarUsuario.show();
                base.view.btnExcluirUsuario.show();
                base.view.txtNome.val(data.Nome);
                base.view.txtEmail.val(data.Email);
                base.view.txtTelefone.val(data.Telefone);
                base.view.txtSobrenome.val(data.Sobrenome);
            }
            else
                base.util.showAlert(divAlerta, "alertaGeral", alertWarning, undefined, "Usuário não encontrado");
        });
    };

    UsuariosController.fn.carregarUsuarios = function (e) {
        var base = this;
        this.processaRequisicaoAJAX('/Usuarios/obterListaUsuarios', 'html', 'Erro ao carregar a lista de usuários', this.view.divAlertaGeral, "alertaGeral", function(data) {
            base.view.listaUsuarios.html(data);
        });
    };

    UsuariosController.fn.processaRequisicaoAJAX = function (url, dataType, tituloErro, divAlerta, idAlerta, callbackSucesso) {
        var base = this;
        var alertDanger = 3;
        //Oculta alertas de erros, se houver
        this.util.hideAlert(idAlerta);

        this.view.imgLoading.fadeIn(100);

        //Realiza a chamada AJAX passada como parâmetro
        $.ajax({
            type: 'GET',
            url: url,
            dataType: dataType,
            success: function (data) {
                callbackSucesso(data);
                base.view.imgLoading.fadeOut(250);
            },
            error: function (xhr, status, error) {
                base.util.showAlert(divAlerta, idAlerta, alertDanger, tituloErro, "Ocorreu um erro inesperado (" + xhr.status + " - " + xhr.statusText + ")");
                base.view.imgLoading.fadeOut(250);
            }
        });
    }

    UsuariosController.fn.btnNovoUsuarioClick = function (e) {
        this.configuraEdicaoUsuario('', true);
        this.inicializaEdicaoUsuario(this.view.btnCancelarNovoUsuario);
        this.view.listaUsuarios.children('.list-group').children('.active').prop('class', 'list-group-item');
    };

    UsuariosController.fn.btnEditarUsuarioClick = function (e) {
        this.configuraEdicaoUsuario('', false);
        this.inicializaEdicaoUsuario(this.view.btnCancelarEditarUsuario);
    };

    UsuariosController.fn.btnCancelarEditarUsuarioClick = function (e) {
        this.configuraEdicaoUsuario('disabled', false);
        this.view.btnEditarUsuario.show();
        this.view.btnExcluirUsuario.show();
    };

    UsuariosController.fn.btnCancelarNovoUsuarioClick = function (e) {
        this.configuraEdicaoUsuario('disabled', true);
    };

    UsuariosController.fn.configuraEdicaoUsuario = function (statusText, limpaTextos) {
        this.view.txtNome.prop('disabled', statusText);
        this.view.txtEmail.prop('disabled', statusText);
        this.view.txtTelefone.prop('disabled', statusText);
        this.view.txtSobrenome.prop('disabled', statusText);
        if (limpaTextos){
            this.view.txtNome.val('');
            this.view.txtEmail.val('');
            this.view.txtTelefone.val('');
            this.view.txtSobrenome.val('');
        }
        this.view.btnNovoUsuario.show();
        this.view.btnEditarUsuario.hide();
        this.view.btnSalvarUsuario.hide();
        this.view.btnExcluirUsuario.hide();
        this.view.btnCancelarNovoUsuario.hide();
        this.view.btnCancelarEditarUsuario.hide();
    };

    UsuariosController.fn.inicializaEdicaoUsuario = function (btnCancelar) {
        this.view.btnNovoUsuario.hide();
        this.view.btnSalvarUsuario.show();
        btnCancelar.show();
    }

    UsuariosController.fn.btnRepetirSenhaClick = function (txtSenha, divAlerta, e) {
        var base = this;
        this.processaRequisicaoAJAX('/Atendimento/RepetirSenha', "Erro ao repetir senha", txtSenha, divAlerta, function (data) {
            if (!data.Erro.Ok) {
                //Caso tenha ocorrido um erro ao tentar repetir senha, exibe o erro em um alerta
                base.util.showAlert(divAlerta, "alertaPainelSenha", data.Erro.TipoMensagem, undefined, data.Erro.descricao);
            }
            else
                //Chama a atenção a senha obtida
                base.util.blinkControl(txtSenha);
        });
    }

    UsuariosController.fn.btnAtendimentoSemSenhaClick = function (rdSenhasIndisponiveis, rdPainelIndisponivel, rdOutraMensagem, txtOutraMensagem, divAlerta, e) {
        var base = this;
        var alertDanger = 3;
        this.ocultarAlertaSemSenha();

        //Se nenhuma das justificativas for selecionada, exibe um erro
        if (!rdSenhasIndisponiveis.prop('checked') && !rdPainelIndisponivel.prop('checked') && !rdOutraMensagem.prop('checked')) {
            this.util.showAlert(divAlerta, "alertaSemSenha", alertDanger, "Motivo obrigatório", "Favor selecionar uma das opções de motivo para atendimento sem senha");
            return;
        }

        //Se for selecionado "Outro motivo" e não for preenchido o motivo, exibe um erro
        if (rdOutraMensagem.prop('checked') && txtOutraMensagem.val() == "") {
            this.util.showAlert(divAlerta, "alertaSemSenha", alertDanger, "Motivo obrigatório", "Favor informar o motivo para atendimento sem senha");
            return;
        }

        //Se não houver erros de validação verificados acima, realiza submit do form via AJAX (método ajaxFormSemSenha)
        this.view.imgLoading.fadeIn(100);
        this.view.formSemSenha.submit();
    }

    UsuariosController.fn.ajaxFormSemSenha = function () {
        var base = this;
        var alertDanger = 3;

        //Realiza post do form via AJAX
        this.view.formSemSenha.ajaxForm({
            url: '/Atendimento/AtendimentoSemSenha',
            success: function (data) {
                if (!data.Erro.Ok) {
                    //Caso tenha ocorrido um erro ao tentar iniciar um atendimento sem senha, exibe o erro em um alerta
                    base.util.showAlert(base.view.divAlertaSemSenha, "alertaSemSenha", data.Erro.TipoMensagem, undefined, data.Erro.descricao);
                }
                else {
                    //Limpa uma eventual senha prévia e chama a atenção a senha obtida
                    base.view.modalSemSenha.modal('hide');
                    base.atualizaSenhaChamada("--");
                    base.view.txtOutraMensagem.val("");
                }
                base.view.imgLoading.fadeOut(250);
            },
            error: function (xhr, status, error) {
                base.util.showAlert(base.view.divAlertaSemSenha, "alertaPainelSenha", alertDanger, "Erro ao iniciar atendimento sem senha", "Ocorreu um erro inesperado (" + xhr.status + " - " + xhr.statusText + ")");
                base.view.imgLoading.fadeOut(250);
            }
        });
    }

    UsuariosController.fn.atualizaSenhaChamada = function (senha) {
        this.view.txtSenha.val(senha);
        this.view.txtSenha.css("background-color", "#FDFAD7");
        this.view.txtSenha.css("background", "linear-gradient(#FEFCE0, #FDFAD7)");
        this.util.blinkControl(this.view.txtSenha);
        this.view.btnBuscaAlunos.prop("disabled", false);
        this.view.txtCpf.prop("disabled", false);
    }

    UsuariosController.fn.btnBuscaAlunosClick = function (e) {
        
    }

    UsuariosController.fn.txtCpfKeypress = function (e) {
        var key = e.which;
        //Se o botão pressionado for Enter, chama a ação do botão para buscar alunos
        if (key == 13)
            this.btnBuscaAlunosClick();
    }

    UsuariosController.fn.btnModalSemSenhaClick = function (e) {
        //Oculta alertas de erros, se houver
        this.util.hideAlert("alertaPainelSenha");
    }

    UsuariosController.fn.radioJustificativaSemSenhaClick = function (disabled, txtOutraMensagem, e) {
        //Desabilita ou habilita o campo para informar outro motivo, dependendo do radiobutton selecionado
        txtOutraMensagem.prop('disabled', disabled);
        this.ocultarAlertaSemSenha();
    }

    UsuariosController.fn.ocultarAlertaSemSenha = function (e) {
        //Oculta alertas de erros, se houver
        this.util.hideAlert("alertaSemSenha");
        this.util.hideAlert("alertaPainelSenha");
    }

    UsuariosController.fn.mouseMoveDocument = function (e) {
        var img = this.view.imgLoading;
        img.offset({
            top: e.pageY - img.outerHeight() + 30,
            left: e.pageX - (img.outerWidth() - 30)
        });
    }
});