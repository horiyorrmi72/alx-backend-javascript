function getPaymentTokenFromAPI(success) {
	if (success) {
		return Promise.resolve({ data: 'Successful response from the API' });
	}
	return Promise.resolve();
}

// console.log(getPaymentTokenFromAPI(0));

module.exports = getPaymentTokenFromAPI;
