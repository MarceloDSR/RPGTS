"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
var Item = /** @class */ (function () {
    function Item(nome, efeito) {
        this.nome = nome;
        this.efeito = efeito;
    }
    Item.prototype.aplicarEfeito = function (personagem) {
        this.efeito(personagem);
    };
    return Item;
}());
exports.Item = Item;
