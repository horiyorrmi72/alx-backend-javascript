function calculateNumber(type, a, b) {
	firstValue = Math.round(a);
	secondValue = Math.round(b);
	switch (type) {
		case 'SUM':
			return firstValue + secondValue;
		case 'SUBTRACT':
			return firstValue - secondValue;
		case 'DIVIDE':
			if (secondValue === 0) return 'Error';
			return firstValue / secondValue;
		default:
			'invalid math operation.';
	}
}

module.exports = calculateNumber;
