const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
	let consoleSpy;

	beforeEach(() => {
		consoleSpy = sinon.spy(console, 'log');
	});

	afterEach(() => {
		consoleSpy.restore();
	});

	it('calls sendPaymentRequestToApi with 100 and 20, and logs "The total is: 120"', () => {
		sendPaymentRequestToApi(100, 20);

		expect(consoleSpy.calledOnce).to.be.true;
		expect(consoleSpy.calledWithExactly('The total is: 120')).to.be.true;
	});

	it('calls sendPaymentRequestToApi with 10 and 10, and logs "The total is: 20"', () => {
		sendPaymentRequestToApi(10, 10);

		expect(consoleSpy.calledOnce).to.be.true;
		expect(consoleSpy.calledWithExactly('The total is: 20')).to.be.true;
	});
});
