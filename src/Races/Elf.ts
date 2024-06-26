import Race from './Race';

class Elf extends Race {
  private static _instanceCount = 0;
  private _maxLifePoints = 99;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._instanceCount += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static get instanceCount(): number {
    return Elf._instanceCount;
  }

  static createdRacesInstances(): number {
    return Elf.instanceCount;
  }
}

export default Elf;