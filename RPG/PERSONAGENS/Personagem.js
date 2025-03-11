"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
var Personagem = /** @class */ (function () {
    function Personagem(nome, vida, forca, defesa) {
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
        this.defesa = defesa;
        this.itens = [];
    }
    Personagem.prototype.receberDano = function (dano) {
        this.vida -= dano;
        if (this.vida < 0)
            this.vida = 0;
        console.log("".concat(this.nome, " agora tem ").concat(this.vida, " de vida."));
    };
    Personagem.prototype.atacar = function (inimigo) {
        var dano = this.forca - inimigo.defesa;
        if (dano > 0) {
            inimigo.receberDano(dano);
            console.log("".concat(this.nome, " causou ").concat(dano, " de dano em ").concat(inimigo.nome, "!"));
        }
        else {
            console.log("".concat(this.nome, " n\u00E3o causou dano em ").concat(inimigo.nome, " devido \u00E0 defesa!"));
        }
    };
    Personagem.prototype.usarItem = function (item) {
        console.log("".concat(this.nome, " usou o item: ").concat(item.nome, " - Efeito: ").concat(item.efeito));
        this.itens = this.itens.filter(function (i) { return i !== item; }); // Remove o item do inventário após o uso
    };
    Personagem.prototype.estaVivo = function () {
        return this.vida > 0;
    };
    return Personagem;
}());
exports.Personagem = Personagem;
