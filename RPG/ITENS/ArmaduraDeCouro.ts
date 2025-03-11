import { Item } from "../ITENS/item";
import { Personagem } from "../PERSONAGENS/Personagem";

export class ArmaduraDeCouro extends Item {
    constructor() {
        super("Armadura de Couro", (personagem: Personagem) => {personagem.defesa += 5});
    }

    aplicarEfeito(personagem: Personagem): void {
        personagem.defesa += 5;
        console.log(`${personagem.nome} equipou a Armadura de Couro! Defesa aumentada para ${personagem.defesa}.`);
    }
}