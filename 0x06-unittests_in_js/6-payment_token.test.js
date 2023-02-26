const getPaymentTokenFromAPI = require('./6-payment_token');
const chai = require("chai");
const expect = chai.expect;

describe('testing getPaymentTokenFromAPI', () => {
  it("should check asyn func getPaymentTokenFromAPI", (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response).to.include({data: 'Successful response from the API'});
      done()
      }).catch(err => done(err));
  });
});
