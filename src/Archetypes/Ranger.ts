import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  _energyType: EnergyType;
  static _instanceMage = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._instanceMage += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._instanceMage;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}