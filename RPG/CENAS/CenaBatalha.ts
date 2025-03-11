import { Cena } from "./Cena";
import { Personagem } from "../PERSONAGENS/Personagem";
import { Inimigo } from "../INIMIGOS/Inimigo";

export class CenaBatalha extends Cena {
    constructor(private jogador: Personagem, private inimigo: Inimigo) {
        super();
    }

    jogar(): void {
        console.log(`Um ${this.inimigo.nome} selvagem aparece!`);
        while (this.jogador.vida > 0 && this.inimigo.vida > 0) {
            this.jogador.atacar(this.inimigo);
            if (this.inimigo.vida > 0) {
                this.inimigo.atacar(this.jogador);
            }
        }
    }
}