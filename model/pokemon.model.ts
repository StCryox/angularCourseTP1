export interface IPokemonProps {
    name: string;
    hp: number;
    attack: number;
    defense: number;
    special_attak: number;
    special_defense: number;
    speed: number;
    ability: {
        name: string;
        power: number;
        chance: number;
        hiddenAbility: boolean;
    }[]
}

export interface IPokemon extends IPokemonProps {

}

export class Pokemon implements IPokemon {
    name: string;
    hp: number;
    attack: number;
    defense: number;
    special_attak: number;
    special_defense: number;
    speed: number;
    ability: {
        name: string;
        power: number;
        chance: number;
        hiddenAbility: boolean;
    }[]

    constructor(pokemon: IPokemonProps) {
       this.name = pokemon.name;
       this.hp = pokemon.hp;
       this.attack = pokemon.attack;
       this.defense = pokemon.defense;
       this.special_attak = pokemon.special_attak;
       this.special_defense = pokemon.special_defense;
       this.speed = pokemon.speed;
       this.ability = pokemon.ability;
    }
}