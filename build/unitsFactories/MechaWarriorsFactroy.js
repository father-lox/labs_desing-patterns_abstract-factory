import WarriorAbstractFactory from './WarriorAbstractFactory.js';
import Stormtrooper from '../units/Stormtrooper.js';
import Scout from '../units/Scout.js';
import Sniper from '../units/Sniper.js';
import listWepon from '../listWeapons.js';
export default class MechaWarriorsFactroy extends WarriorAbstractFactory {
    constructor() {
        super(...arguments);
        this.skinDirectory = '../img/skins/Mecha/';
        this.race = 'Mecha 🤖';
    }
    getStormtrooper(name) {
        const skinPath = this.skinDirectory + 'Stormtrooper.jpg';
        return new Stormtrooper(8, 9, super.randomParametr(), this.race, skinPath, super.randomRank(), name, listWepon.minigun);
    }
    getScout(name) {
        const skinPath = this.skinDirectory + 'Scout.jpg';
        return new Scout(7, 5, super.randomParametr(), this.race, skinPath, super.randomRank(), name, listWepon.lwrc);
    }
    getSniper(name) {
        const skinPath = this.skinDirectory + 'Sniper.jpg';
        return new Sniper(10, 8, super.randomParametr(), this.race, skinPath, super.randomRank(), name, listWepon.barrett);
    }
}
//# sourceMappingURL=MechaWarriorsFactroy.js.map