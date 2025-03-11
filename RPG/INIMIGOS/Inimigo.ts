import { Personagem } from "../PERSONAGENS/Personagem";

export interface Inimigo extends Personagem {
    tipo: string; 
}