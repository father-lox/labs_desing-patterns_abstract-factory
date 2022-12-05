import SmuraiWarriorsFactroy from "./unitsFactories/SmuraiWarriorsFactroy.js";
import MechaWarriorsFactroy from "./unitsFactories/MechaWarriorsFactroy.js";
import warriorTypes from "./warriorTypes.js";
export default class WebUi {
    constructor() {
        this.form = document.getElementById('generator');
        this.nameField = document.getElementById('warrior-name');
        this.typeField = document.getElementById('warrior-type');
        this.mechaRadio = document.getElementById('mecha');
        this.samuraiRadio = document.getElementById('Samurai');
        this.view = document.getElementById('skin');
        this.fieldHealth = document.getElementById('unit-health');
        this.fieldDamage = document.getElementById('unit-damage');
        this.fieldWeapon = document.getElementById('unit-weapon');
        this.fieldRace = document.getElementById('unit-race');
        this.fieldName = document.getElementById('unit-name');
        this.fieldRank = document.getElementById('unit-rank');
        this.fieldUlta = document.getElementById('unit-ulta');
        this.mechaBarracks = new MechaWarriorsFactroy();
        this.samuraiBarracks = new SmuraiWarriorsFactroy();
    }
    initWebUi() {
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            if (this.samuraiRadio.checked) {
                this.updateWarriorView(this.generatUnit(this.samuraiBarracks));
            }
            else {
                this.updateWarriorView(this.generatUnit(this.mechaBarracks));
            }
        });
    }
    generatUnit(barracks) {
        if (this.typeField.value.toLocaleUpperCase() === warriorTypes.stormtrooper) {
            return barracks.getStormtrooper(this.nameField.value);
        }
        else if (this.typeField.value.toLocaleUpperCase() === warriorTypes.sniper) {
            return barracks.getSniper(this.nameField.value);
        }
        else {
            return barracks.getScout(this.nameField.value);
        }
    }
    updateWarriorView(unit) {
        this.setProperty(this.fieldName, unit.name);
        this.setProperty(this.fieldHealth, unit.health.toString());
        this.setProperty(this.fieldDamage, unit.damage.toString());
        this.setProperty(this.fieldWeapon, unit.weapon);
        this.setProperty(this.fieldRace, unit.race);
        this.setProperty(this.fieldRank, unit.getRank());
        this.setProperty(this.fieldUlta, unit.getSpecialParametr().toString());
        this.view.setAttribute('src', unit.skin);
    }
    setProperty(container, value) {
        container.style.display = 'block';
        container.querySelector('span').innerText = value;
    }
}
//# sourceMappingURL=WebUi.js.map