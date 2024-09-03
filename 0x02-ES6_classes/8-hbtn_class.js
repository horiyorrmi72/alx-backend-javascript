export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  set size(newSize) {
    this._size = newSize;
  }

  set location(newLocation) {
    this._location = newLocation;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  // method to use when it's cast to a Number
  valueOf() {
    return this._size;
  }

  // method to use when it's cast to a string
  toString() {
    return this._location;
  }
}
