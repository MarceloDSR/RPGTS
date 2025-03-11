import { Item } from "../ITENS/item";

export interface Personagem {
    nome: string;
    vida: number;
    força: number;
    defesa: number;
    itens: Item[];

    atacar(inimigo: Personagem): void;
    receberDano(dano: number): void;
    usarItem(item: Item): void;
    estaVivo(): boolean;
}