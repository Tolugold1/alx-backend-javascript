const sendPaymentRequestToApi = require('./3-payment');
const utils = require("./utils");
const sinon = require("sinon");
const chai = require('chai');
const expect = chai.expect;

describe("check for sendPaymentRequestToApi", () => {
  it("validate the use of utils function", () => {
    const spies = sinon.spy(utils, 'calculateNumber')
    sendPaymentRequestToApi(100, 20);
    expect(spies.calledOnce).to.be.true;
    expect(spies.calledWith('SUM', 100, 20));
    spies.restore();
  });
});
