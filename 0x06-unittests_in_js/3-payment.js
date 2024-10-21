const Utils = require('./utils');


function sendPaymentRequestToApi(totalAmount, totalShipping) {
	const sumTotal = Utils.calculateNumber('SUM', totalAmount, totalShipping);

    console.log(`The total is :${sumTotal}`);
    return sumTotal;
}

// console.log('from payment-gateway:', sendPaymentRequestToApi(100, 10));
module.exports = sendPaymentRequestToApi;