const sinon = require('sinon');
const { expect } = sinon;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', (done) => {
	afterEach(() => {});

	it('calls getPaymentTokenFromAPI and returns "{data: Successful response from the API }" if the value of success is equal "true ', () => {
		getPaymentTokenFromAPI(true)
			.then((apiResponse) => {
				expect(apiResponse).to.include({
					data: 'Successful response from the API',
				});
				done();
			})
			.catch((err) => {
				done(err);
			});
	});
});
