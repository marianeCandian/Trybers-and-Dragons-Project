import Race from './Race';

class Dwarf extends Race {
  private static _instanceCount = 0;
  private _maxLifePoints = 80;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._instanceCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static get instanceCount(): number {
    return Dwarf._instanceCount;
  }

  static createdRacesInstances(): number {
    return Dwarf.instanceCount;
  }
}

export default Dwarf;
