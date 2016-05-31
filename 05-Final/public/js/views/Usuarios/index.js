Module("Estudo.NodeJs.Views.Usuarios.Index", function (Index) {
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
});