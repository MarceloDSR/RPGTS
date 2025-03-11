import { Inimigo } from "./Inimigo";
import { Personagem } from "../PERSONAGENS/Personagem";
import { Item } from "../ITENS/item";

export class EsqueletoGuerreiro implements Inimigo {
    nome: string;
    vida: number;
    força: number;
    defesa: number;
    itens: Item[];
    tipo: string;

    constructor() {
        this.nome = "Esqueleto Guerreiro";
        this.vida = 80;
        this.força = 15;
        this.defesa = 10;
        this.itens = [];
        this.tipo = "Morto-Vivo";
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
        console.log(`${this.nome} tentou usar um item, mas esqueletos não usam itens!`);
    }

    estaVivo(): boolean {
        return this.vida > 0;
    }
}