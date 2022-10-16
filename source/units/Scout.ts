import Warrior from './Warrior.js';
import warriorTypes from '../warriorTypes.js';

export default class Scout extends Warrior {
    constructor(
        damage: number,
        health: number,
        private _dataReliability: number,
        
        race: string,
        skin: string,
        rank: number,
        name: string,
        weapon: string
    ) {
        super(damage, health, rank, name, warriorTypes.scout, skin, race, weapon);
    }

    get dataReliability(): number {
        return this._dataReliability;
    }

    public getSpecialParametr(): number {
        return this._dataReliability;
    }
}