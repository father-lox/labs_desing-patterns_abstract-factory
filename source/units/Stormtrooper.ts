import Warrior from "./Warrior.js";
import warriorTypes from "../warriorTypes.js";

export default class Stormtrooper extends Warrior {
    constructor(
        damage: number,
        health: number,
        private _mobility: number,

        race: string,
        skin: string,
        rank: number,
        name: string,
        weapon: string,
    ) {
        super(damage, health, rank, name, warriorTypes.stormtrooper, skin, race, weapon);
    }

    get mobility(): number {
        return this._mobility;
    }

    public getSpecialParametr(): number {
        return this._mobility;
    }
}