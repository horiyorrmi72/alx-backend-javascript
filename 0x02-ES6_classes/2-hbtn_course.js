export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw new TypeError('Name must be a string');
    if (typeof length !== 'number') throw new TypeError('Length must be a number');
    if (!Array.isArray(students)) throw new TypeError('Students must be an Array of strings');
    students.forEach((student) => {
      if (typeof student !== 'string') throw new TypeError('Students must be an array of strings');
    });

    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(newName) {
    if (typeof newName !== 'string') throw new TypeError('name must be a string');
    this._name = newName;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') throw new TypeError('length must be a number');
    this._length = newLength;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) throw new TypeError('students must be an array of strings');
    newStudents.forEach((student) => {
      if (typeof student !== 'string') throw new TypeError('students must be an array of strings');
    });
    this._students = newStudents;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}

/* export default class HolbertonCourse {
  constructor(name, length, students) {
    if (Object.getPrototypeOf(name) !== String.prototype)
    throw TypeError('name must be a string');
    if (Object.getPrototypeOf(length) !== Number.prototype)
     throw TypeError('length must be of type number');
    if (Object.getPrototypeOf(students) !== Array.prototype)
     throw TypeError('students must bee an array of strings');
    students.forEach((student) => {
      if (Object.getPrototypeOf(student) !== String.prototype)
       throw TypeError('students must be an array of strings');
    });
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(newName) {
    if (Object.getPrototypeOf(newName) !== String.prototype)
    throw TypeError('name must be a string');
    this._name = newName;
  }

  set length(newLen) {
    if (Object.getPrototypeOf(newLen) !== Number.prototype)
     throw TypeError('length must be of type number');
    this._length = newLen;
  }

  set students(newStudents) {
    if (Object.getPrototypeOf(newStudents) !== String.prototype)
     throw TypeError('students must be an array');
    newStudents.forEach((student) => {
      if (Object.getPrototypeOf(student) !== String.prototype)
       throw TypeError('students must be an array of strings');
    });
    this._students = newStudents;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }
}
*/
