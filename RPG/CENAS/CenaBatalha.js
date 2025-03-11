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
exports.CenaBatalha = void 0;
var Cena_1 = require("./Cena");
var CenaBatalha = /** @class */ (function (_super) {
    __extends(CenaBatalha, _super);
    function CenaBatalha(jogador, inimigo) {
        var _this = _super.call(this) || this;
        _this.jogador = jogador;
        _this.inimigo = inimigo;
        return _this;
    }
    CenaBatalha.prototype.jogar = function () {
        console.log("Um ".concat(this.inimigo.nome, " selvagem aparece!"));
        while (this.jogador.vida > 0 && this.inimigo.vida > 0) {
            this.jogador.atacar(this.inimigo);
            if (this.inimigo.vida > 0) {
                this.inimigo.atacar(this.jogador);
            }
        }
    };
    return CenaBatalha;
}(Cena_1.Cena));
exports.CenaBatalha = CenaBatalha;
