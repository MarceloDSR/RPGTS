import { Personagem } from "./Personagem";
import { Item } from "../ITENS/item";

export class Mago implements Personagem {
    nome: string;
    vida: number;
    força: number;
    defesa: number;
    itens: Item[];

    constructor(nome: string) {
        this.nome = nome;
        this.vida = 60;
        this.força = 10;
        this.defesa = 5;
        this.itens = [];
    }

    atacar(inimigo: Personagem): void {
        const dano = this.força + 10 - inimigo.defesa; // Dano mágico adicional
        if (dano > 0) {
            inimigo.receberDano(dano);
            console.log(`${this.nome} causou ${dano} de dano em ${inimigo.nome}!`);
        } else {
            console.log(`${this.nome} não causou dano em ${inimigo.nome} devido à defesa!`);
        }
    }

    receberDano(dano: number): void {
        const danoReal = Math.max(dano - this.defesa, 0);
        this.vida -= danoReal;
        if (this.vida <= 0) {
            console.log(`${this.nome} foi derrotado.`);
        }
    }

    usarItem(item: Item): void {
        console.log(`${this.nome} usou o item: ${item.nome} - Efeito: ${item.efeito}`);
        this.itens = this.itens.filter(i => i !== item); // Remove o item do inventário após o uso
    }

    estaVivo(): boolean {
        return this.vida > 0;
    }
}