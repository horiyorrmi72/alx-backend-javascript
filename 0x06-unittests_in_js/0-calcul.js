function calculateNumber(a, b) {
	roundUpFirstValue = Math.round(a);
	roundUpSecondValue = Math.round(b);
	return Math.round(roundUpFirstValue + roundUpSecondValue);
}
module.exports = calculateNumber;
