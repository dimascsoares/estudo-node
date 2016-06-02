Module("Estudo.NodeJs.Util", function (Util) {
    Util.fn.initialize = function () {
        $('.sp_celphones').mask(this.SPMaskBehavior, this.spOptions);
    };

    Util.fn.showAlert = function (divAlert, alertId, errorCode, title, errorMessage) {
        divAlert.html('<div id="' + alertId + '" class="alert ' + this.convertErrorMessage(errorCode) + ' alert-dismissible fade in" role="alert">' +
                            '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                            ((title != undefined) ? '<strong>' + title + '</strong><br />' : "") + errorMessage + 
                      '</div>');
    };

    Util.fn.hideAlert = function (alertId) {
        var alert = $("#" + alertId);
        if (alert != undefined) {
            alert.alert('close');
        }
    };

    Util.fn.convertErrorMessage = function (errorCode) {
        switch (errorCode) {
            case 0: return "alert-info";
            case 1: return "alert-success";
            case 2: return "alert-warning";
            default: return "alert-danger";
        }
    };

    Util.fn.blinkControl = function (control) {
        control.fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);
    };

    Util.fn.exibirConfirmacao = function (titulo, mensagem, callbackConfirmacao) {
        var modal = $("#modalConfirmacao");
        var btnSim = $("#btnSimConfirmacao");
        var lblTitulo = $("#lblTituloConfirmacao");
        var lblMensagem = $("#lblMensagemConfirmacao");
        
        lblTitulo.prop('innerHTML', titulo);
        lblMensagem.prop('innerHTML', mensagem);
        btnSim.off();
        btnSim.click(callbackConfirmacao.bind(this, modal));
        
        modal.modal();
    };
    
    Util.fn.SPMaskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    };
    
    Util.fn.spOptions = {
        onKeyPress: function(val, e, field, options) {
            SPMaskBehavior = function (val) {
                return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
            };
            field.mask(SPMaskBehavior.apply({}, arguments), options);
        }
    };
});