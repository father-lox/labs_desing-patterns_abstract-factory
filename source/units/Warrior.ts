abstract class Warrior {
    constructor(
        private _damage: number,        
        private _health: number,    
        protected _rank: number,
        readonly name: string,
        readonly type: string,
        private _skin: string,
        readonly race: string,
        readonly weapon: string
    ) {}

    set rank(battleExperience: number) {
        this._rank += battleExperience;
    }

    get skin(): string {
        return this._skin;
    }

    get damage(): number {
        return this._damage;
    }

    get health(): number {
        return this._health;
    }

    public getRank(): string {
        if (this._rank < 100) {
            return '☆'
        } else if (this._rank >= 100 && this._rank < 1000) {
            return '★'
        } else {
            return '⍟'
        }
    }
}

export default Warrior;