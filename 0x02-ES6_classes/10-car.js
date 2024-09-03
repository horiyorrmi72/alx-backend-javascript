export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  set color(newColor) {
    this._color = newColor;
  }

  set brand(newBrand) {
    this._brand = newBrand;
  }

  set motor(newMotor) {
    this._motor = newMotor;
  }

  get color() {
    return this._color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  cloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
