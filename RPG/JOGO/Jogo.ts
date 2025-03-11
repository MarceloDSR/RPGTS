// src/JOGO/Jogo.ts
import { Personagem } from "../PERSONAGENS/Personagem";
import { Guerreiro } from "../PERSONAGENS/Guerreiro";
import { Mago } from "../PERSONAGENS/Mago";
import { Arqueiro } from "../PERSONAGENS/Arqueiro";
import { Goblin } from "../INIMIGOS/Goblin";
import { AranhaGigante } from "../INIMIGOS/AranhaGigante";
import { DragaoNegro } from "../INIMIGOS/DragaoNegro";
import { PocaoDeCura } from "../ITENS/PocaoDeCura";
import { Inimigo } from "../INIMIGOS/Inimigo";
import * as readlineSync from "readline-sync";


export class Jogo {
    private jogador: Personagem;
    private cenaAtual: number;

    constructor() {
        this.cenaAtual = 1; // Começa na cena 1 (Introdução)
    }

    iniciar(): void {
        console.log("Bem-vindo à Aventura RPG: A Maldição do Dragão Negro!");

        // Escolha do personagem
        this.jogador = this.escolherPersonagem();

        // Loop principal do jogo
        while (this.cenaAtual <= 4 && this.jogador.estaVivo()) {
            switch (this.cenaAtual) {
                case 1:
                    this.cenaFloresta();
                    break;
                case 2:
                    this.cenaCaverna();
                    break;
                case 3:
                    this.cenaDragao();
                    break;
                case 4:
                    this.cenaFinal();
                    break;
            }
        }

        // Fim do jogo
        if (!this.jogador.estaVivo()) {
            console.log("Você foi derrotado... O reino caiu na escuridão.");
        }
    }

    // Função para escolher o personagem
    private escolherPersonagem(): Personagem {
        console.log("\n--- Escolha do Personagem ---");
        console.log("Escolha sua classe:");
        console.log("1. Guerreiro");
        console.log("2. Mago");
        console.log("3. Arqueiro");
    
        while (true) { // Loop infinito (só sai com o return)
            const escolha = readlineSync.question("Digite o número da sua escolha: ");
    
            const nome = readlineSync.question("Digite o nome do seu personagem: ");
    
            switch (escolha) {
                case '1':
                    console.log(`Você escolheu o Guerreiro: ${nome}`);
                    return new Guerreiro(nome); // Retorna um Guerreiro
                case '2':
                    console.log(`Você escolheu o Mago: ${nome}`);
                    return new Mago(nome); // Retorna um Mago
                case '3':
                    console.log(`Você escolheu o Arqueiro: ${nome}`);
                    return new Arqueiro(nome); // Retorna um Arqueiro
                default:
                    console.log("Escolha inválida. Por favor, escolha 1 para Guerreiro, 2 para Mago ou 3 para Arqueiro.");
                    break; // Volta ao início do loop
            }
        }
    }
    // Função para iniciar uma batalha
    private iniciarBatalha(jogador: Personagem, inimigo: Inimigo): boolean {
        console.log(`\nUm ${inimigo.nome} (${inimigo.tipo}) apareceu! Prepare-se para a batalha!`);

        while (jogador.estaVivo() && inimigo.estaVivo()) {
            console.log(`\n${jogador.nome}: ${jogador.vida} HP`);
            console.log(`${inimigo.nome}: ${inimigo.vida} HP\n`);

            console.log("O que você faz?");
            console.log("1. Atacar");
            console.log("2. Usar Item");
            console.log("3. Fugir");

            const escolha = readlineSync.question("Digite o número da sua escolha: ");

            switch (escolha) {
                case '1':
                    jogador.atacar(inimigo);
                    break;
                case '2':
                    if (jogador.itens.length > 0) {
                        const item = jogador.itens[0]; // Usa o primeiro item do inventário
                        jogador.usarItem(item);
                    } else {
                        console.log("Você não tem itens no inventário!");
                    }
                    break;
                case '3':
                    console.log("Você tenta fugir...");
                    return false; // Sai da batalha
                default:
                    console.log("Escolha inválida. Você perdeu a vez!");
                    break;
            }

            if (inimigo.estaVivo()) {
                inimigo.atacar(jogador);
            }
        }

        if (jogador.estaVivo()) {
            console.log(`\nVocê derrotou o ${inimigo.nome}!`);
            return true; // Vitória na batalha
        } else {
            console.log("\nVocê foi derrotado!");
            return false; // Derrota na batalha
        }
    }

    // Cena 1: Floresta Escura (Encontro com o Goblin)
    private cenaFloresta(): void {
        console.log("\n--- Cena 1: Floresta Escura ---");
        console.log("Você acorda em uma floresta escura, sem memória. Um Goblin aparece à sua frente!");
        console.log("O que você faz?");
        console.log("1. Lutar");
        console.log("2. Fugir");

        let escolhaValida = false;
        while (!escolhaValida) {
            const escolha = readlineSync.question("Digite o número da sua escolha: ");

            const goblin = new Goblin("Goblin", 50, 10, 5);

            switch (escolha) {
                case '1':
                    const vitoria = this.iniciarBatalha(this.jogador, goblin);
                    if (vitoria) {
                        console.log("Você encontrou uma Poção de Cura!");
                        this.jogador.itens.push(new PocaoDeCura());
                        this.cenaAtual = 2; // Avança para a próxima cena
                    }
                    escolhaValida = true;
                    break;
                case '2':
                    console.log("Você fugiu e se perdeu na floresta...");
                    this.cenaAtual = 4; // Vai direto para o final ruim
                    escolhaValida = true;
                    break;
                default:
                    console.log("Escolha inválida. Por favor, escolha 1 para Lutar ou 2 para Fugir.");
                    break;
            }
        }
    }

    // Cena 2: Caverna da Aranha (Encontro com a Aranha Gigante)
    private cenaCaverna(): void {
        console.log("\n--- Cena 2: Caverna da Aranha ---");
        console.log("Você entra em uma caverna escura e é surpreendido por uma Aranha Gigante!");
        console.log("O que você faz?");
        console.log("1. Lutar");
        console.log("2. Fugir");

        let escolhaValida = false;
        while (!escolhaValida) {
            const escolha = readlineSync.question("Digite o número da sua escolha: ");

            const aranha = new AranhaGigante();

            switch (escolha) {
                case '1':
                    const vitoria = this.iniciarBatalha(this.jogador, aranha);
                    if (vitoria) {
                        console.log("Você encontrou uma Espada de Aço!");
                        this.jogador.força += 10; // Melhora o ataque do jogador
                        this.cenaAtual = 3; // Avança para a próxima cena
                    }
                    escolhaValida = true;
                    break;
                case '2':
                    console.log("Você fugiu da caverna...");
                    this.cenaAtual = 4; // Vai direto para o final ruim
                    escolhaValida = true;
                    break;
                default:
                    console.log("Escolha inválida. Por favor, escolha 1 para Lutar ou 2 para Fugir.");
                    break;
            }
        }
    }

    // Cena 3: Covil do Dragão (Encontro com o Dragão Negro)
    private cenaDragao(): void {
        console.log("\n--- Cena 3: Covil do Dragão ---");
        console.log("Você chega ao covil do Dragão Negro, o guardião da maldição!");
        console.log("O que você faz?");
        console.log("1. Lutar");
        console.log("2. Fugir");

        let escolhaValida = false;
        while (!escolhaValida) {
            const escolha = readlineSync.question("Digite o número da sua escolha: ");

            const dragao = new DragaoNegro();

            switch (escolha) {
                case '1':
                    const vitoria = this.iniciarBatalha(this.jogador, dragao);
                    if (vitoria) {
                        console.log("Você derrotou o Dragão Negro e quebrou a maldição! O reino está salvo!");
                        this.cenaAtual = 4; // Finaliza o jogo
                    }
                    escolhaValida = true;
                    break;
                case '2':
                    console.log("Você fugiu, e o reino caiu na escuridão...");
                    this.cenaAtual = 4; // Finaliza o jogo
                    escolhaValida = true;
                    break;
                default:
                    console.log("Escolha inválida. Por favor, escolha 1 para Lutar ou 2 para Fugir.");
                    break;
            }
        }
    }

    // Cena Final (Resultado do Jogo)
    private cenaFinal(): void {
        console.log("\n--- Fim do Jogo ---");
        if (this.jogador.estaVivo()) {
            console.log("Parabéns! Você salvou o reino!");
        } else {
            console.log("Você foi derrotado... O reino caiu na escuridão.");
        }
        this.cenaAtual = 5; // Finaliza o jogo
    }
}