// import Archetype, { Mage } from './Archetypes';
// import Energy from './Energy';
// import Fighter from './Fighter';
// import Race, { Elf } from './Races';

// export default class Character implements Fighter {
//   private _race: Race;
//   private _archetype: Archetype;
//   private _maxLifePoints: number;
//   private _lifePoints: number;
//   private _strength: number;
//   private _dexterity: number;
//   private _energy: Energy;
//   private _defense: number;

//   constructor(name: string) {
//     this._dexterity = getRandomInt(1, 10);
//     this._race = new Elf(name, this._dexterity);
//     this._archetype = new Mage(name);
//     this._maxLifePoints = this._race.maxLifePoints / 2;
//     this._lifePoints = this._maxLifePoints;
//     this._strength = getRandomInt(1, 10);
//     this._defense = getRandomInt(1, 10);
//     this._energy = {
//       type_: this._archetype.energyType,
//       amount: getRandomInt(1, 10),
//     };
//   }

//   get lifePoints(): number {
//     return this._lifePoints;
//   }

//   get strength(): number {
//     return this._strength;
//   }

//   receiveDamage(attackPoints: number): number {
//     let damage = attackPoints;

//     if (this.lifePoints - damage < -1) {
//       damage = this.lifePoints + 1;
//       this._lifePoints = -1;
//     } else {
//       this._lifePoints -= damage;
//     }

//     return this.lifePoints;
//   }

//   attack(enemy: SimpleFighter): void {
//     const attackPoints = this.strength;
//     enemy.receiveDamage(attackPoints);
//   }
// }