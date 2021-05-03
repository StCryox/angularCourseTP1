import { IPokemonProps, Pokemon } from "../model/pokemon.model";
import { PokemonController } from "../controller/pokemon.controller";

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


let player1 = new Pokemon(PikachuProps);
let player2 = new Pokemon(BulbasaurProps);

console.log(player1.ability[0].name);

//let returnStr = console.log(player1.name + " utilise " + playerSpell + ".\n" + opponent.name + " reçoit " + playerSpell.power + " dégâts !");

test('check player turn', () => {
   expect(PokemonController.getFirstPlayerTurnBySpeed(player1,player2)).toBe(player1);
});

test('check player1 basicAttack player2', async () => {
    expect(await PokemonController.basicAttack(player1, player2)).toBe(player2);
});

test('check player1 skillAttack player2', async () => {
    let spell = Math.floor(Math.random() * 2);
    expect(await PokemonController.skillAttack(spell, player1, player2)).toBe(player2);
});

test('check player fight', async () => {
    let attackType: number; // 0 = basic | 1 = spell
    let spell: number; // 0 = normal | 1 = hidden
    let timer: number = 2_000;
    let turnSwap: IPokemonProps[] = [player1, player2];
    let counter: number = 0;
    let attacker: IPokemonProps = PokemonController.getFirstPlayerTurnBySpeed(player1,player2);
    let defender: IPokemonProps = player2;
    while(!PokemonController.isDead(attacker) || !PokemonController.isDead(defender)){
        attackType = Math.floor(Math.random() * 2);
        if(attackType === 1){
            spell = Math.floor(Math.random() * 2);
            defender = await PokemonController.fight(attacker, defender, timer, spell);
        }
        defender = await PokemonController.fight(attacker, defender, timer);
        counter++;
        defender = attacker;
        attacker = turnSwap[counter % 2];
        jest.setTimeout(timer);
    }
});

test('check player2 basicAttack player1 which is dead', async () => { 
    expect(async () => { 
        player1.hp = 0;
        await PokemonController.basicAttack(player2, player1); 
    }).toThrow("Opponent have 0 HP.");
});

test('check player2 skillAttack player1 which is dead', async () => {
    player1.hp = 0;
    let spell = Math.floor(Math.random() * 2);
    expect(await PokemonController.skillAttack(spell, player2, player1)).toThrow("Opponent have 0 HP.");
});

test('check player2 isDead', () => {
    player2.hp = 0;
    expect(PokemonController.isDead(player2)).toBe(true);
});
