Module("Estudo.Ajax", function (Ajax) {
    Ajax.fn.initialize = function (url, options) { };

    Ajax.fn.request = function (url, options) {
        return $.when($.ajax(url, options));
    };

    Ajax.fn.get = function (url, options) {
        options = Estudo.eden.extend(options, { type: "GET" });
        return this.request(url, options);
    };

    Ajax.fn.post = function (url, options) {
        options = Estudo.eden.extend(options, { type: "POST" });
        return this.request(url, options);
    };
});