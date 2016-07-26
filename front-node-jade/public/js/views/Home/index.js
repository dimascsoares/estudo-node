Module("Estudo.NodeJs.Views.Home.Index", function (Index) {
    Index.fn.initialize = function () {
        this.imgLoading = $("#imgLoading");
        this.body = $("body");
    };
});