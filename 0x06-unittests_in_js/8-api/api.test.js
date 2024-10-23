const request = require('request');
const { expect } = require('chai');
const { response } = require('./api');

describe('Index page', () => {
	const url = 'http://localhost:7865';

	it('Correct status code', (done) => {
		request(url, (error, response, body) => {
			expect(response.statusCode).to.equal(200);
			done();
		});
	});

	it('Correct result', (done) => {
		request(url, (error, response, body) => {
			expect(body).to.equal('Welcome to the payment system');
			done();
		});
	});

    it('should return "cannot GET /ping" for unavailable endpoint and 404 status code', (done) => {
        request(`${url}/ping`, (error, response, body) => {
            expect(response.statusCode).to.equal(404);
            expect(body).to.include('Cannot GET /ping');
            done();
        })
    })
});
