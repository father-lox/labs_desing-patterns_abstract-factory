import Warrior from "../units/Warrior.js";

export default abstract class WarriorAbstractFactory {
    abstract getStormtrooper(name: string): Warrior;
    abstract getScout(name: string): Warrior;
    abstract getSniper(name: string): Warrior;

    protected randomParametr(): number {
        return Math.round((Math.random() * (10 - 1) + 1));
    }

    protected randomRank(): number {
        return Math.round((Math.random() * (1100 - 1) + 1));
    }
}