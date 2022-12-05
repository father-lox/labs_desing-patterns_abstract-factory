import WarriorAbstractFactory from './WarriorAbstractFactory.js';
import Warrior from '../units/Warrior.js';
import Stormtrooper from '../units/Stormtrooper.js';
import Scout from '../units/Scout.js';
import Sniper from '../units/Sniper.js';
import listWepon from '../listWeapons.js';

export default class SmuraiWarriorsFactroy extends WarriorAbstractFactory {
    private skinDirectory: string = './img/skins/samurai/';
    private race: string = 'Sumurai 👺';

    public getStormtrooper(name: string): Warrior {
        const skinPath = this.skinDirectory + 'Stormtrooper.jpg';
        return new Stormtrooper(
            5,
            7,
            super.randomParametr(),
            
            this.race,
            skinPath,
            super.randomRank(),
            name,
            listWepon.ak103
        );
    }
    
    public getScout(name: string): Warrior {
        const skinPath = this.skinDirectory + 'Scout.jpg';
        return new Scout(
            2,
            2,
            super.randomParametr(),

            this.race,
            skinPath,
            super.randomRank(), 
            name,
            listWepon.krissVector
        );
    }

    public getSniper(name: string): Warrior {
        const skinPath = this.skinDirectory + 'Sniper.jpg';
        return new Sniper(
            7,
            3,
            super.randomParametr(),
            
            this.race,
            skinPath,
            super.randomRank(),
            name,
            listWepon.as50
        );
    }
}