import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  _energyType: EnergyType;
  static _instanceMage = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._instanceMage += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._instanceMage;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}