import { Item } from "../ITENS/item";
import { Personagem } from "../PERSONAGENS/Personagem";

export class PocaoDeCura extends Item {
    constructor() {
        super("Poção de Cura", (personagem: Personagem) => {personagem.vida += 30});
    }

    aplicarEfeito(personagem: Personagem): void {
        personagem.vida += 30;
        console.log(`${personagem.nome} usou a Poção de Cura! Vida restaurada para ${personagem.vida}.`);
    }
}