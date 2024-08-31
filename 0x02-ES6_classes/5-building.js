/** *
 * ##NOTE:
 * define the Building class
 * initialize the building object with the given parameters sqft
 * check if the class that intends to use the
 *   building class data has the evacuationWarningMessage  method
 * if not throw new Error('Class extending Building must
 *  override evacuationWarningMessage');
 */
export default class Building {
  constructor(sqft) {
    if (new.target !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
