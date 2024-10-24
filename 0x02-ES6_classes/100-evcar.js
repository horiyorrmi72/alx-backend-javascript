import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  set range(newRange) {
    this._range = newRange;
  }

  get range() {
    return this._range;
  }

  /* eslint-disable-next-line class-methods-use-this */
  cloneCar() {
    return new Car();
  }
}
