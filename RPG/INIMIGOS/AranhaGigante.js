"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AranhaGigante = void 0;
var AranhaGigante = /** @class */ (function () {
    function AranhaGigante(nome, tipo, vida, forca, defesa) {
        if (nome === void 0) { nome = "Aranha Gigante"; }
        if (tipo === void 0) { tipo = "Monstro"; }
        if (vida === void 0) { vida = 60; }
        if (forca === void 0) { forca = 20; }
        if (defesa === void 0) { defesa = 5; }
        this.nome = nome;
        this.tipo = tipo;
        this.vida = vida;
        this.forca = forca;
        this.defesa = defesa;
        this.itens = []; // Inicializa o inventário vazio
    }
    AranhaGigante.prototype.atacar = function (personagem) {
        console.log("".concat(this.nome, " mordeu e injetou veneno, causando ").concat(this.forca, " de dano!"));
        personagem.receberDano(this.forca);
    };
    AranhaGigante.prototype.receberDano = function (dano) {
        var danoRecebido = Math.max(dano - this.defesa, 0);
        this.vida -= danoRecebido;
        if (this.vida <= 0) {
            console.log("".concat(this.nome, " foi derrotada."));
        }
        else {
            console.log("".concat(this.nome, " recebeu ").concat(danoRecebido, " de dano! Vida restante: ").concat(this.vida));
        }
    };
    AranhaGigante.prototype.usarItem = function (item) {
        console.log("".concat(this.nome, " tentou usar um item, mas aranhas n\u00E3o usam itens!"));
    };
    AranhaGigante.prototype.estaVivo = function () {
        return this.vida > 0;
    };
    return AranhaGigante;
}());
exports.AranhaGigante = AranhaGigante;
