import SmuraiWarriorsFactroy from "./unitsFactories/SmuraiWarriorsFactroy.js";
import MechaWarriorsFactroy from "./unitsFactories/MechaWarriorsFactroy.js";
import WarriorAbstractFactory from "./unitsFactories/WarriorAbstractFactory.js";

const barracks: WarriorAbstractFactory = new SmuraiWarriorsFactroy();

console.log(barracks.getScout('LT-14'));
console.log(barracks.getSniper('ZVT_99'));
console.log(barracks.getStormtrooper('K-002'));