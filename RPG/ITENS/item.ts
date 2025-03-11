import { Personagem } from "../PERSONAGENS/Personagem";

export class Item {
    nome: string;
    efeito: (personagem: Personagem) => void;

    constructor(nome: string, efeito: (personagem: Personagem) => void) {
        this.nome = nome;
        this.efeito = efeito;
    }

    aplicarEfeito(personagem: Personagem): void {
        this.efeito(personagem);
    }
}