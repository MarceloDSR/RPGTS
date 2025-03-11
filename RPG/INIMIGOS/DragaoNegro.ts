import { Inimigo } from "./Inimigo";
import { Personagem } from "../PERSONAGENS/Personagem";
import { Item } from "../ITENS/item";

export class DragaoNegro implements Inimigo {
    nome: string;
    vida: number;
    força: number;
    defesa: number;
    itens: Item[];
    tipo: string;

    constructor() {
        this.nome = "Dragão Negro";
        this.vida = 200;
        this.força = 30;
        this.defesa = 20;
        this.itens = [];
        this.tipo = "Dragão";
    }

    atacar(personagem: Personagem): void {
        const dano = this.força - personagem.defesa;
        if (dano > 0) {
            personagem.receberDano(dano);
            console.log(`${this.nome} causou ${dano} de dano em ${personagem.nome}!`);
        } else {
            console.log(`${this.nome} não causou dano em ${personagem.nome} devido à defesa!`);
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
        console.log(`${this.nome} tentou usar um item, mas dragões não usam itens!`);
    }

    estaVivo(): boolean {
        return this.vida > 0;
    }
}