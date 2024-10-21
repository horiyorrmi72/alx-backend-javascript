const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
	it('calls Utils.calculateNumber with type of SUM and 100,20 as arguments', () => {
		const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
		sendPaymentRequestToApi(100, 20);
		expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be
			.true;
		expect(calculateNumberSpy.calledOnce).to.be.true;

		calculateNumberSpy.restore();
	});
});
