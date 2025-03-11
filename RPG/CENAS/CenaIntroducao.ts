import { Cena } from "./Cena";
import { Guerreiro } from "../PERSONAGENS/Guerreiro";
import { Mago } from "../PERSONAGENS/Mago";

export class CenaIntroducao extends Cena {
    jogar(): void {
        console.log("Bem-vindo à Aventura RPG!");
        console.log("Escolha seu personagem:");
        console.log("1. Guerreiro");
        console.log("2. Mago");

        // Simula a escolha do jogador
        const escolha = Math.floor(Math.random() * 2) + 1; // Gera um número entre 1 e 2

        switch (escolha) {
            case 1: {
                const guerreiro = new Guerreiro("Aragorn");
                console.log(`Você escolheu o Guerreiro: ${guerreiro.nome}`);
                break;
            }
            case 2: {
                const mago = new Mago("Gandalf");
                console.log(`Você escolheu o Mago: ${mago.nome}`);
                break;
            }
            default: {
                console.log("Escolha inválida. Um Guerreiro foi selecionado por padrão.");
                const guerreiro = new Guerreiro("Aragorn");
                console.log(`Você escolheu o Guerreiro: ${guerreiro.nome}`);
                break;
            }
        }
    }
}