const sinon = require('sinon');
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
	it('calls getPaymentTokenFromAPI and returns "{data: Successful response from the API }" if the value of success is true', (done) => {
		getPaymentTokenFromAPI(true)
			.then((apiResponse) => {
				expect(apiResponse).to.deep.include({
					data: 'Successful response from the API',
				});
				done();
			})
			.catch((err) => {
				done(err);
			});
	});
});
