Module("Estudo.Pubsub", function (Pubsub) {
    Pubsub.fn.initialize = function () {
        this.listeners = [];
    };

    Pubsub.fn.listener = function (name) {
        return this.listeners[eventName] = this.listeners[eventName] || [];
    };

    Pubsub.fn.subscribe = function (name, callback) {
        this.listener(name).push(callback);
    };

    Pubsub.fn.publish = function (name, data) {
        var listener = this.listener(name),
            length = listener.length,
            i = 0;

        for (; i < length; i = i + 1) {
            var callback = listener[i];

            if (typeof callback === "function") {
                callback(data);
            }
        }
    };
});