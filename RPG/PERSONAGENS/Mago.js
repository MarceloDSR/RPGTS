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
exports.Mago = void 0;
var Personagem_1 = require("./Personagem");
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nome) {
        return _super.call(this, nome, 60, 10, 5) || this;
    }
    Mago.prototype.atacar = function (inimigo) {
        console.log("".concat(this.nome, " lan\u00E7a um feiti\u00E7o poderoso!"));
        inimigo.receberDano(this.forca + 10); // Magos têm dano mágico adicional
    };
    return Mago;
}(Personagem_1.Personagem));
exports.Mago = Mago;
