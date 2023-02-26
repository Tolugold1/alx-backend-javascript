const getPaymentTokenFromAPI = (success) => {
  if (success === true) {
    return {data: 'Successful response from the API' }
  }
};

module.exports = getPaymentTokenFromAPI;