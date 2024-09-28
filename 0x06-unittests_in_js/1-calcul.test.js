const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calcuate Numbers base on the type provided', function () {
	it('return value base on the type provided', function () {
		assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
		assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
		assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
		assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
	});
});
