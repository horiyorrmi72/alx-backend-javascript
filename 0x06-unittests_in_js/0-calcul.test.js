const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('rounded numbers', function () {
	it('checks if it rounds the number', function () {
		assert.strictEqual(calculateNumber(2.5, 5), 8);
		assert.strictEqual(calculateNumber(0.5, 1), 2);
		assert.strictEqual(calculateNumber(2.5, 6), 9);
	});
});
