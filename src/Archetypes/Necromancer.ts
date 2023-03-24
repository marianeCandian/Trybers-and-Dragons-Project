import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  _energyType: EnergyType;
  static _instanceMage = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._instanceMage += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._instanceMage;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}