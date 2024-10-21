const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
	const sumTotal = Utils.calculateNumber('SUM', totalAmount, totalShipping);

	console.log(`The total is: ${sumTotal}`);
	return sumTotal;
}

module.exports = sendPaymentRequestToApi;
