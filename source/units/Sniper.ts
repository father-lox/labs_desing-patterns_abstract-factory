import Warrior from "./Warrior.js";
import warriorTypes from '../warriorTypes.js';

export default class Sniper extends Warrior {
    constructor(
        damage: number,
        health: number,
        private _accuracy: number,

        race: string,
        skin: string,
        rank: number,
        name: string,
        weapon: string
    ) {
        super(damage, health, rank, name, warriorTypes.sniper, skin, race, weapon);        
    }

    get accuracy(): number {
        return this._accuracy;
    }
}