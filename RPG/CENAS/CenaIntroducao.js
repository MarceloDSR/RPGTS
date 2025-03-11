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
exports.CenaIntroducao = void 0;
var Cena_1 = require("./Cena");
var Guerreiro_1 = require("../PERSONAGENS/Guerreiro");
var Mago_1 = require("../PERSONAGENS/Mago");
var CenaIntroducao = /** @class */ (function (_super) {
    __extends(CenaIntroducao, _super);
    function CenaIntroducao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CenaIntroducao.prototype.jogar = function () {
        console.log("Bem-vindo à Aventura RPG!");
        console.log("Escolha seu personagem:");
        console.log("1. Guerreiro");
        console.log("2. Mago");
        // Simula a escolha do jogador
        var escolha = Math.floor(Math.random() * 2) + 1; // Gera um número entre 1 e 2
        switch (escolha) {
            case 1: {
                var guerreiro = new Guerreiro_1.Guerreiro("Aragorn");
                console.log("Voc\u00EA escolheu o Guerreiro: ".concat(guerreiro.nome));
                break;
            }
            case 2: {
                var mago = new Mago_1.Mago("Gandalf");
                console.log("Voc\u00EA escolheu o Mago: ".concat(mago.nome));
                break;
            }
            default: {
                console.log("Escolha inválida. Um Guerreiro foi selecionado por padrão.");
                var guerreiro = new Guerreiro_1.Guerreiro("Aragorn");
                console.log("Voc\u00EA escolheu o Guerreiro: ".concat(guerreiro.nome));
                break;
            }
        }
    };
    return CenaIntroducao;
}(Cena_1.Cena));
exports.CenaIntroducao = CenaIntroducao;
