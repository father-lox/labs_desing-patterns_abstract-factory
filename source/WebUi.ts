import SmuraiWarriorsFactroy from "./unitsFactories/SmuraiWarriorsFactroy.js";
import MechaWarriorsFactroy from "./unitsFactories/MechaWarriorsFactroy.js";
import WarriorAbstractFactory from "./unitsFactories/WarriorAbstractFactory.js";
import warriorTypes from "./warriorTypes.js";
import Warrior from "./units/Warrior.js";

export default class WebUi {
    private form: HTMLFormElement = document.getElementById('generator') as HTMLFormElement;
    private nameField: HTMLInputElement = document.getElementById('warrior-name') as HTMLInputElement;
    private typeField: HTMLSelectElement = document.getElementById('warrior-type') as HTMLSelectElement;
    private mechaRadio: HTMLInputElement = document.getElementById('mecha') as HTMLInputElement;
    private samuraiRadio: HTMLInputElement = document.getElementById('Samurai') as HTMLInputElement;
    
    private view: HTMLDivElement = document.getElementById('skin') as HTMLImageElement;
    private fieldHealth: HTMLDivElement = document.getElementById('unit-health') as HTMLDivElement;
    private fieldDamage: HTMLDivElement = document.getElementById('unit-damage') as HTMLDivElement;
    private fieldWeapon: HTMLDivElement = document.getElementById('unit-weapon') as HTMLDivElement;
    private fieldRace: HTMLDivElement = document.getElementById('unit-race') as HTMLDivElement;
    private fieldName: HTMLDivElement = document.getElementById('unit-name') as HTMLDivElement;
    private fieldRank: HTMLDivElement = document.getElementById('unit-rank') as HTMLDivElement;
    private fieldUlta: HTMLDivElement = document.getElementById('unit-ulta') as HTMLDivElement;

    private mechaBarracks: WarriorAbstractFactory = new MechaWarriorsFactroy();
    private samuraiBarracks: WarriorAbstractFactory = new SmuraiWarriorsFactroy();

    public initWebUi() {
        this.form.addEventListener('submit', (event: Event) => {
            event.preventDefault();

            if (this.samuraiRadio.checked) {
                this.updateWarriorView(this.generatUnit(this.samuraiBarracks));
            } else {
                this.updateWarriorView(this.generatUnit(this.mechaBarracks));
            }
        });
    }

    private generatUnit(barracks: WarriorAbstractFactory): Warrior {
        if (this.typeField.value.toLocaleUpperCase() === warriorTypes.stormtrooper) {
            return barracks.getStormtrooper(this.nameField.value);
        } else if (this.typeField.value.toLocaleUpperCase() === warriorTypes.sniper) {
            return barracks.getSniper(this.nameField.value);
        } else {
            return barracks.getScout(this.nameField.value);
        }
    }

    private updateWarriorView(unit: Warrior) {
        this.setProperty(this.fieldName, unit.name);
        this.setProperty(this.fieldHealth, unit.health.toString());
        this.setProperty(this.fieldDamage, unit.damage.toString());
        this.setProperty(this.fieldWeapon, unit.weapon);
        this.setProperty(this.fieldRace, unit.race);
        this.setProperty(this.fieldRank, unit.getRank());
        this.setProperty(this.fieldUlta, unit.getSpecialParametr().toString());
    
        this.view.setAttribute('src', unit.skin);
    }


    private setProperty(container: HTMLDivElement, value: string) {
        container.style.display = 'block';
        (container.querySelector('span') as HTMLSpanElement).innerText = value;
    }
}   