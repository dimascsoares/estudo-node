Module("Kroton.Router", function (Router) {
    Router.fn.initialize = function () {
        this.routes = [];
    };

    Router.fn.map = function (segment, callback) {
        this.routes[segment] = callback;
    };

    Router.fn.dispatch = function () {
        var url = window.location,
            pathname = url.pathname || "/",
            route = this.routes[pathname];

        if (typeof route === "function") {
            route();
        }
    };
});