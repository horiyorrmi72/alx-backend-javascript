function getPaymentTokenFromAPI(success) {
	if (success) {
		return new Promise((resolve, reject) => {
			resolve({ data: 'Successful response from the API' });
		});
	}
}

// console.log(getPaymentTokenFromAPI(1));

module.exports = getPaymentTokenFromAPI;
