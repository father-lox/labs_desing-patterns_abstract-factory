import Warrior from './Warrior.js';
import warriorTypes from '../warriorTypes.js';
export default class Scout extends Warrior {
    constructor(damage, health, _dataReliability, race, skin, rank, name, weapon) {
        super(damage, health, rank, name, warriorTypes.scout, skin, race, weapon);
        this._dataReliability = _dataReliability;
    }
    get dataReliability() {
        return this._dataReliability;
    }
    getSpecialParametr() {
        return this._dataReliability;
    }
}
//# sourceMappingURL=Scout.js.map