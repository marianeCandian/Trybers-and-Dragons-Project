import Race from './Race';

class Halfling extends Race {
  private static _instanceCount = 0;
  private _maxLifePoints = 60;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._instanceCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static get instanceCount(): number {
    return Halfling._instanceCount;
  }

  static createdRacesInstances(): number {
    return Halfling.instanceCount;
  }
}

export default Halfling;