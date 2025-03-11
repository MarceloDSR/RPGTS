"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jogo = void 0;
var CenaIntroducao_1 = require("../CENAS/CenaIntroducao");
var CenaFloresta_1 = require("../CENAS/CenaFloresta");
var CenaBatalha_1 = require("../CENAS/CenaBatalha");
var Guerreiro_1 = require("../PERSONAGENS/Guerreiro");
var AranhaGigante_1 = require("../INIMIGOS/AranhaGigante");
var DragaoNegro_1 = require("../INIMIGOS/DragaoNegro");
var Jogo = /** @class */ (function () {
    function Jogo() {
        this.cenaAtual = new CenaIntroducao_1.CenaIntroducao();
    }
    Jogo.prototype.iniciar = function () {
        console.log("Iniciando o jogo...");
        this.cenaAtual.jogar();
        // Simula a escolha do jogador (Guerreiro)
        var jogador = new Guerreiro_1.Guerreiro("Aragorn");
        // Cena 1: Floresta Escura
        this.cenaAtual = new CenaFloresta_1.CenaFloresta(jogador);
        this.cenaAtual.jogar();
        // Cena 2: Caverna da Aranha
        var aranha = new AranhaGigante_1.AranhaGigante();
        this.cenaAtual = new CenaBatalha_1.CenaBatalha(jogador, aranha);
        this.cenaAtual.jogar();
        // Cena 3: Dragão Negro
        var dragao = new DragaoNegro_1.DragaoNegro();
        this.cenaAtual = new CenaBatalha_1.CenaBatalha(jogador, dragao);
        this.cenaAtual.jogar();
        // Verifica o final do jogo
        if (jogador.estaVivo()) {
            console.log("Parabéns! Você derrotou o Dragão Negro e salvou o reino!");
        }
        else {
            console.log("Você foi derrotado... O reino caiu na escuridão.");
        }
    };
    return Jogo;
}());
exports.Jogo = Jogo;
