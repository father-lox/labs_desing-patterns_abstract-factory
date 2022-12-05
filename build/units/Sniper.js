import Warrior from "./Warrior.js";
import warriorTypes from '../warriorTypes.js';
export default class Sniper extends Warrior {
    constructor(damage, health, _accuracy, race, skin, rank, name, weapon) {
        super(damage, health, rank, name, warriorTypes.sniper, skin, race, weapon);
        this._accuracy = _accuracy;
    }
    get accuracy() {
        return this._accuracy;
    }
    getSpecialParametr() {
        return this._accuracy;
    }
}
//# sourceMappingURL=Sniper.js.map