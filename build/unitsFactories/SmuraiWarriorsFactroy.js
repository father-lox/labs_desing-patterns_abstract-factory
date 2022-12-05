import WarriorAbstractFactory from './WarriorAbstractFactory.js';
import Stormtrooper from '../units/Stormtrooper.js';
import Scout from '../units/Scout.js';
import Sniper from '../units/Sniper.js';
import listWepon from '../listWeapons.js';
export default class SmuraiWarriorsFactroy extends WarriorAbstractFactory {
    constructor() {
        super(...arguments);
        this.skinDirectory = '../img/skins/samurai/';
        this.race = 'Sumurai 👺';
    }
    getStormtrooper(name) {
        const skinPath = this.skinDirectory + 'Stormtrooper.jpg';
        return new Stormtrooper(5, 7, super.randomParametr(), this.race, skinPath, super.randomRank(), name, listWepon.ak103);
    }
    getScout(name) {
        const skinPath = this.skinDirectory + 'Scout.jpg';
        return new Scout(2, 2, super.randomParametr(), this.race, skinPath, super.randomRank(), name, listWepon.krissVector);
    }
    getSniper(name) {
        const skinPath = this.skinDirectory + 'Sniper.jpg';
        return new Sniper(7, 3, super.randomParametr(), this.race, skinPath, super.randomRank(), name, listWepon.as50);
    }
}
//# sourceMappingURL=SmuraiWarriorsFactroy.js.map