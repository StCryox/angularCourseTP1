import { IPokemon, IPokemonProps, Pokemon } from "../model/pokemon.model";

export class PokemonController {
 
    public static getFirstPlayerTurnBySpeed(player: IPokemonProps, opponent: IPokemonProps): IPokemon {
        return player.speed >= opponent.speed ? player : opponent;
    }

    public static isDead(pokemon: IPokemonProps): boolean {
        return pokemon.hp <= 0 ? true : false;
    }

    private static determineAtackChance(): number{
        return Math.floor(Math.random() * 100) + 0;
    }

    private static async timer(ms: number): Promise<number> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    
    public static async basicAttack(attacker: IPokemonProps, defender: IPokemonProps): Promise<IPokemon> {
        if(PokemonController.isDead(defender)){
            throw new Error("Opponent have 0 HP.");
        }
        defender.hp -= attacker.attack * 0.12;
        return defender;
    }
    
    public static async skillAttack(spell: number, attacker: IPokemonProps, defender: IPokemonProps): Promise<IPokemon> {
        let playerSpell = attacker.ability[spell];
        
        if(PokemonController.isDead(defender)){
            throw new Error("Opponent have 0 HP.");
        }
       
        defender.hp -= playerSpell.power;
        
        return defender;
    }

    public static async fight(attacker: IPokemonProps, defender: IPokemonProps, interval: number, spell?: number): Promise<IPokemon> {
        await this.timer(interval);
        if(spell !== undefined){
            return this.skillAttack(spell, attacker, defender);
        }
        return this.basicAttack(attacker, defender);
    }
}