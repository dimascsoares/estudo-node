Module("Estudo.NodeJs.Views.Usuarios.Aba.Usuarios", function (Index) {
    Index.fn.initialize = function () {
        this.baseView = new Estudo.NodeJs.Views.Home.Index();
        
        this.imgLoading = this.baseView.imgLoading;
        this.listaUsuarios = $('#lista_usuarios');
        this.divAlertaGeral = $("#alertaGeral");
        this.divScroll = $("#divScroll");
        this.alertaAcoesUsuario = $("#alertaAcoesUsuario");
        
        this.txtId = $("#txtId");
        this.txtNome = $("#txtNome");
        this.txtEmail = $("#txtEmail");
        this.txtTelefone = $("#txtTelefone");
        this.txtSobrenome = $("#txtSobrenome");
        this.formUsuario = $("#formUsuario");
        
        this.btnNovoUsuario = $("#btnNovoUsuario");
        this.btnEditarUsuario = $("#btnEditarUsuario");
        this.btnSalvarUsuario = $("#btnSalvarUsuario");
        this.btnExcluirUsuario = $("#btnExcluirUsuario");
        this.btnCancelarNovoUsuario = $("#btnCancelarNovoUsuario");
        this.btnCancelarEditarUsuario = $("#btnCancelarEditarUsuario");
    };

    Index.fn.carregarListaUsuarios = function (lista) {
        this.listaUsuarios.html(lista);
        this.listaUsuarios.filter(".listaSemResultado").css('class', 'lista');
    };

    Index.fn.exibirListaSemResultados = function () {
        this.listaUsuarios.filter(".lista").css('class', 'listaSemResultado');
    };

    Index.fn.limparSelecaoLista = function () {
        this.listaUsuarios.find('.list-group').children('.active').prop('class', 'list-group-item');
    };

    Index.fn.obterIdItemLista = function (id) {
        return "#" + id;
    };

    Index.fn.marcarSelecionadoLista = function (id) {
        $(id).prop('class', 'list-group-item active');
    };

    Index.fn.rolarScrollParaItem = function (itemId) {
        this.divScroll.animate({
                    scrollTop: $(itemId).offset().top
                }, 500);
    };

    Index.fn.obterIdUsuario = function (idUsuario) {
        var hidden = $("#hidden" + idUsuario);
        if (hidden == undefined)
            return '';
        return hidden.val();
    };

    Index.fn.obterUsuarioDigitado = function () {
        var usuario = 
        {
            Id : this.txtId.val(),
            Nome : this.txtNome.val(),
            Sobrenome : this.txtSobrenome.val(),
            Email : this.txtEmail.val(),
            Telefone : this.txtTelefone.val()
        };

        return usuario;
    };

    Index.fn.configuraEdicaoUsuario = function (statusText, limpaTextos) {
        this.txtNome.prop('disabled', statusText);
        this.txtEmail.prop('disabled', statusText);
        this.txtTelefone.prop('disabled', statusText);
        this.txtSobrenome.prop('disabled', statusText);
        if (limpaTextos){
            this.txtId.val('');
            this.txtNome.val('');
            this.txtEmail.val('');
            this.txtTelefone.val('');
            this.txtSobrenome.val('');
        }
        this.btnNovoUsuario.show();
        this.btnEditarUsuario.hide();
        this.btnSalvarUsuario.hide();
        this.btnExcluirUsuario.hide();
        this.btnCancelarNovoUsuario.hide();
        this.btnCancelarEditarUsuario.hide();
    };

    Index.fn.carregaDadosUsuarioSelecionado = function (usuarioSelecionado) {
        this.configuraEdicaoUsuario('disabled', true);
        this.btnEditarUsuario.show();
        this.btnExcluirUsuario.show();
        this.txtId.val(usuarioSelecionado.Id);
        this.txtNome.val(usuarioSelecionado.Nome);
        this.txtEmail.val(usuarioSelecionado.Email);
        this.txtTelefone.val(usuarioSelecionado.Telefone);
        this.txtSobrenome.val(usuarioSelecionado.Sobrenome);
    }
});