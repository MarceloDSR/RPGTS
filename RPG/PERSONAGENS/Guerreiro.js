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
exports.Guerreiro = void 0;
var Personagem_1 = require("./Personagem");
var Guerreiro = /** @class */ (function (_super) {
    __extends(Guerreiro, _super);
    function Guerreiro(nome) {
        return _super.call(this, nome, 100, 20, 10) || this;
    }
    // Ataque inimigo
    Guerreiro.prototype.atacar = function (personagem) {
        var dano = this.forca - personagem.defesa;
        if (dano > 0) {
            personagem.receberDano(dano);
            console.log("".concat(this.nome, " causou ").concat(dano, " de dano em ").concat(personagem.nome, "!"));
        }
        else {
            console.log("".concat(this.nome, " n\u00E3o causou dano em ").concat(personagem.nome, " devido \u00E0 defesa!"));
        }
    };
    return Guerreiro;
}(Personagem_1.Personagem));
exports.Guerreiro = Guerreiro;
