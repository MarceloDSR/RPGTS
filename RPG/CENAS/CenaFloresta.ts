import { Cena } from "./Cena";
import { Goblin } from "../INIMIGOS/Goblin";
import { Personagem } from "../PERSONAGENS/Personagem";
import { PocaoDeCura } from "../ITENS/PocaoDeCura";

export class CenaFloresta extends Cena {
    constructor(private jogador: Personagem) {
        super();
    }

    jogar(): void {
        console.log("Você acorda em uma floresta escura, sem memória. Um Goblin aparece à sua frente!");
        console.log("O que você faz?");
        console.log("1. Lutar");
        console.log("2. Fugir");

        const escolha = Math.floor(Math.random() * 2) + 1; // Simula escolha do jogador

        if (escolha === 1) {
            const goblin = new Goblin("Goblin", "Goblin", 50, 10);
            console.log("Você decide lutar!");
            while (this.jogador.estaVivo() && goblin.estaVivo()) {
                this.jogador.atacar(goblin);
                if (goblin.estaVivo()) {
                    goblin.atacar(this.jogador);
                }
            }
            if (this.jogador.estaVivo()) {
                console.log("Você derrotou o Goblin e encontrou uma Poção de Cura!");
                this.jogador.itens.push(new PocaoDeCura());
            }
        } else {
            console.log("Você fugiu e se perdeu na floresta...");
        }
    }
}