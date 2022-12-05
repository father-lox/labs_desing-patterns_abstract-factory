import Warrior from "./Warrior.js";
import warriorTypes from "../warriorTypes.js";
export default class Stormtrooper extends Warrior {
    constructor(damage, health, _mobility, race, skin, rank, name, weapon) {
        super(damage, health, rank, name, warriorTypes.stormtrooper, skin, race, weapon);
        this._mobility = _mobility;
    }
    get mobility() {
        return this._mobility;
    }
    getSpecialParametr() {
        return this._mobility;
    }
}
//# sourceMappingURL=Stormtrooper.js.map