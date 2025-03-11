"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PocaoDeCura = void 0;
var item_1 = require("../ITENS/item");
var PocaoDeCura = /** @class */ (function (_super) {
    __extends(PocaoDeCura, _super);
    function PocaoDeCura() {
        return _super.call(this, "Poção de Cura", function (personagem) { personagem.vida += 30; }) || this;
    }
    PocaoDeCura.prototype.aplicarEfeito = function (personagem) {
        personagem.vida += 30;
        console.log("".concat(personagem.nome, " usou a Po\u00E7\u00E3o de Cura! Vida restaurada para ").concat(personagem.vida, "."));
    };
    return PocaoDeCura;
}(item_1.Item));
exports.PocaoDeCura = PocaoDeCura;
