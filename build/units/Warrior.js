class Warrior {
    constructor(_damage, _health, _rank, name, type, _skin, race, weapon) {
        this._damage = _damage;
        this._health = _health;
        this._rank = _rank;
        this.name = name;
        this.type = type;
        this._skin = _skin;
        this.race = race;
        this.weapon = weapon;
    }
    set rank(battleExperience) {
        this._rank += battleExperience;
    }
    get skin() {
        return this._skin;
    }
    get damage() {
        return this._damage;
    }
    get health() {
        return this._health;
    }
    getRank() {
        if (this._rank < 900) {
            return '☆';
        }
        else if (this._rank >= 900 && this._rank < 1050) {
            return '★';
        }
        else {
            return '⍟';
        }
    }
}
export default Warrior;
//# sourceMappingURL=Warrior.js.map