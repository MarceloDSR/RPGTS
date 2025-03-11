import { Item } from "../ITENS/item";
import { Personagem } from "../PERSONAGENS/Personagem";

export class EspadaDeAco extends Item {
    constructor() {
        super("Espada de Aço", (personagem: Personagem) => {personagem.forca += 10});
    }

    aplicarEfeito(personagem: Personagem): void {
        personagem.forca += 10;
        console.log(`${personagem.nome} equipou a Espada de Aço! Ataque aumentado para ${personagem.forca}.`);
    }
}