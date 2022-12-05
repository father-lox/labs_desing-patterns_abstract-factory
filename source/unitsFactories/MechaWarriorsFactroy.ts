import WarriorAbstractFactory from './WarriorAbstractFactory.js';
import Warrior from '../units/Warrior.js';
import Stormtrooper from '../units/Stormtrooper.js';
import Scout from '../units/Scout.js';
import Sniper from '../units/Sniper.js';
import listWepon from '../listWeapons.js';

export default class MechaWarriorsFactroy extends WarriorAbstractFactory {
    private skinDirectory: string = '/labs_desing-patterns_abstract-factory/img/skins/Mecha/';
    private race: string = 'Mecha 🤖';

    public getStormtrooper(name: string): Warrior {
        const skinPath = this.skinDirectory + 'Stormtrooper.jpg';
        return new Stormtrooper(
            8,
            9,
            super.randomParametr(),
            
            this.race,
            skinPath,
            super.randomRank(),
            name,
            listWepon.minigun
        );
    }
    
    public getScout(name: string): Warrior {
        const skinPath = this.skinDirectory + 'Scout.jpg';
        return new Scout(
            7,
            5,
            super.randomParametr(),

            this.race,
            skinPath,
            super.randomRank(), 
            name,
            listWepon.lwrc
        );
    }

    public getSniper(name: string): Warrior {
        const skinPath = this.skinDirectory + 'Sniper.jpg';
        return new Sniper(
            10,
            8,
            super.randomParametr(),
            
            this.race,
            skinPath,
            super.randomRank(),
            name,
            listWepon.barrett
        );
    }
}