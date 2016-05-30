Module("Estudo.NodeJs.Controllers.HomeController", function (HomeController) {
    HomeController.fn.initialize = function () {
        this.util = new Kroton.Extranet.Util();
        this.view = new Kroton.Extranet.Views.Layout.Index();
        
        this.view.imgLoading.hide();
        this.view.body.mousemove(this.mouseMoveDocument.bind(this));
    };
    
    HomeController.fn.mouseMoveDocument = function (e) {
        var img = this.view.imgLoading;
        img.offset({
            top: e.pageY - img.outerHeight() + 30,
            left: e.pageX - (img.outerWidth() - 30)
        });
    }
});