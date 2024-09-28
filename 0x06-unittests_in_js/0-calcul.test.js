const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('rounded numbers', function () {
	it('checks if it rounds the number', function () {
		assert.equal(calculateNumber(1.2, 3.7), 5);
		assert.equal(calculateNumber(2.7, 4.2), 7);
		assert.equal(calculateNumber(1.5, 3.7), 6);
		assert.equal(calculateNumber(2.4, 4.8), 7);
		assert.strictEqual(calculateNumber(2.5, 5), 8);
		assert.strictEqual(calculateNumber(0.5, 1), 2);
		assert.strictEqual(calculateNumber(2.5, 6), 9);
	});
});
