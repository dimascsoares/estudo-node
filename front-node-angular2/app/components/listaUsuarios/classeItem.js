"use strict";
var ClasseItem = (function () {
    // boilerplate 
    function ClasseItem(value) {
        this.value = value;
    }
    ClasseItem.prototype.toString = function () { return this.value; };
    // values 
    ClasseItem.normal = new ClasseItem("list-group-item");
    ClasseItem.selecionado = new ClasseItem("list-group-item active");
    ClasseItem.erro = new ClasseItem("list-group-item active itemComErro");
    return ClasseItem;
}());
exports.ClasseItem = ClasseItem;
//# sourceMappingURL=classeItem.js.map