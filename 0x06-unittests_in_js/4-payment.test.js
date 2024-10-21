const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
	it('stubs Utils.calculateNumber to always return 10 and verifies the arguments', () => {
		const calculateNumberStub = sinon
			.stub(Utils, 'calculateNumber')
			.returns(10);

		const consoleSpy = sinon.spy(console, 'log');

		sendPaymentRequestToApi(100, 20);

		expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
		expect(calculateNumberStub.calledOnce).to.be.true;

		expect(consoleSpy.calledWithExactly('The total is: 10')).to.be.true;

		calculateNumberStub.restore();
		consoleSpy.restore();
	});

	// it('calls Utils.calculateNumber with type of SUM and 100,20 as arguments', () => {
	// 	const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
	// 	sendPaymentRequestToApi(100, 20);
	// 	expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
	// 	expect(calculateNumberSpy.calledOnce).to.be.true;

	// 	calculateNumberSpy.restore();
	// });
});
