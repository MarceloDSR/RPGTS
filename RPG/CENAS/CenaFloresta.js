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
exports.CenaFloresta = void 0;
var Cena_1 = require("./Cena");
var Goblin_1 = require("../INIMIGOS/Goblin");
var PocaoDeCura_1 = require("../ITENS/PocaoDeCura");
var CenaFloresta = /** @class */ (function (_super) {
    __extends(CenaFloresta, _super);
    function CenaFloresta(jogador) {
        var _this = _super.call(this) || this;
        _this.jogador = jogador;
        return _this;
    }
    CenaFloresta.prototype.jogar = function () {
        console.log("Você acorda em uma floresta escura, sem memória. Um Goblin aparece à sua frente!");
        console.log("O que você faz?");
        console.log("1. Lutar");
        console.log("2. Fugir");
        var escolha = Math.floor(Math.random() * 2) + 1; // Simula escolha do jogador
        if (escolha === 1) {
            var goblin = new Goblin_1.Goblin("Goblin", "Goblin", 50, 10);
            console.log("Você decide lutar!");
            while (this.jogador.estaVivo() && goblin.estaVivo()) {
                this.jogador.atacar(goblin);
                if (goblin.estaVivo()) {
                    goblin.atacar(this.jogador);
                }
            }
            if (this.jogador.estaVivo()) {
                console.log("Você derrotou o Goblin e encontrou uma Poção de Cura!");
                this.jogador.itens.push(new PocaoDeCura_1.PocaoDeCura());
            }
        }
        else {
            console.log("Você fugiu e se perdeu na floresta...");
        }
    };
    return CenaFloresta;
}(Cena_1.Cena));
exports.CenaFloresta = CenaFloresta;
