Module("Estudo.NodeJs.Eden", function (Eden) {
    Eden.fn.initialize = function () { };

    Eden.fn.extend = function (object, options) {
        return $.extend(object, options);
    };

    Eden.fn.el = function (selector) {
        var element = new Estudo.NodeJs.DomElement(document.querySelector(selector));
        return element;
    };

    Eden.fn.addEvent = function (el, eventName, callback) {
        el.addEventListener(eventName, callback);
    };
});

Module("Estudo.NodeJs.DomElement", function (DomElement) {
    DomElement.fn.initialize = function (el) {
        this.el = el;
    };

    DomElement.fn.attr = function (name) {
        return this.el[name];
    };

    DomElement.fn.innerHTML = function (html) {
        this.el.innerHTML = html;
    };

    DomElement.fn.val = function () {
        return this.el.value;
    }

    DomElement.fn.click = function (callback) {
        Estudo.eden.addEvent(this.el, "click", callback);
    };
});