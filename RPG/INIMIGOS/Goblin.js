"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Goblin = void 0;
var Goblin = /** @class */ (function () {
    function Goblin(nome, tipo, vida, força, defesa) {
        if (nome === void 0) { nome = "Goblin"; }
        if (tipo === void 0) { tipo = "Goblin"; }
        if (vida === void 0) { vida = 200; }
        if (força === void 0) { força = 30; }
        if (defesa === void 0) { defesa = 20; }
        this.nome = nome;
        this.tipo = tipo;
        this.vida = vida;
        this.forca = força;
        this.defesa = defesa;
        this.itens = []; // Inicializa o inventário vazio
    }
    Goblin.prototype.atacar = function (personagem) {
        console.log("".concat(this.nome, " ataca!"));
        personagem.receberDano(this.forca);
    };
    Goblin.prototype.receberDano = function (dano) {
        var danoReal = Math.max(dano - this.defesa, 0);
        this.vida -= danoReal;
        if (this.vida <= 0) {
            console.log("".concat(this.nome, " foi derrotado."));
        }
    };
    Goblin.prototype.usarItem = function (item) {
        console.log("".concat(this.nome, " tentou usar um item, mas drag\u00F5es n\u00E3o usam itens!"));
    };
    Goblin.prototype.estaVivo = function () {
        return this.vida > 0;
    };
    return Goblin;
}());
exports.Goblin = Goblin;
