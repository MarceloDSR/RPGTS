"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DragaoNegro = void 0;
var DragaoNegro = /** @class */ (function () {
    function DragaoNegro(nome, tipo, vida, força, defesa) {
        if (nome === void 0) { nome = "Dragão Negro"; }
        if (tipo === void 0) { tipo = "Dragão"; }
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
    DragaoNegro.prototype.atacar = function (personagem) {
        console.log("".concat(this.nome, " cospe fogo, causando ").concat(this.forca, " de dano!"));
        personagem.receberDano(this.forca);
    };
    DragaoNegro.prototype.receberDano = function (dano) {
        var danoRecebido = Math.max(dano - this.defesa, 0);
        this.vida -= danoRecebido;
        if (this.vida <= 0) {
            console.log("".concat(this.nome, " foi derrotado."));
        }
        else {
            console.log("".concat(this.nome, " recebeu ").concat(danoRecebido, " de dano! Vida restante: ").concat(this.vida));
        }
    };
    DragaoNegro.prototype.usarItem = function (item) {
        console.log("".concat(this.nome, " tentou usar um item, mas drag\u00F5es n\u00E3o usam itens!"));
    };
    DragaoNegro.prototype.estaVivo = function () {
        return this.vida > 0;
    };
    return DragaoNegro;
}());
exports.DragaoNegro = DragaoNegro;
