import { Pokemon } from "./model/pokemon.model";

const PikachuProps = {
        name: "Pikachu",
        hp: 35,
        attack: 55,
        defense: 40,
        special_attak: 50,
        special_defense: 50,
        speed: 90,
        ability: [{
            name: "Static",
            power: 28,
            chance: 80,
            hiddenAbility: false
        },
        {
            name: "Lightning Rod",
            power: 80,
            chance: 30,
            hiddenAbility: true
    }]
}

const BulbasaurProps = {
    name: "Bulbasaur",
    hp: 45,
    attack: 49,
    defense: 49,
    special_attak: 65,
    special_defense: 65,
    speed: 45,
    ability: [{
        name: "Overgrow",
        power: 10,
        chance: 100,
        hiddenAbility: false
    },
    {
        name: "Chlorophyll",
        power: 60,
        chance: 30,
        hiddenAbility: true
}]
}

let Pikachu = new Pokemon(PikachuProps);
let Bulbasaur = new Pokemon(BulbasaurProps);

console.log(Pikachu);
console.log(Bulbasaur);

