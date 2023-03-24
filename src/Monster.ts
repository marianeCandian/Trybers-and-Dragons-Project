import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    let damage = attackPoints;

    if (this.lifePoints - damage < -1) {
      damage = this.lifePoints + 1;
      this._lifePoints = -1;
    } else {
      this._lifePoints -= damage;
    }

    return this.lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    const attackPoints = this.strength;
    enemy.receiveDamage(attackPoints);
  }
}