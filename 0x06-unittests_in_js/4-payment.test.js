const sendPaymentRequestToApi = require('./4-payment.js');
const utils = require("./utils");
const sinon = require("sinon");
const chai = require('chai');
const expect = chai.expect;

describe("check for sendPaymentRequestToApi", () => {
  const spies = sinon.spy(console, 'log');
  it("validate the use of utils function", () => {
    const stubs = sinon.stub(utils, 'calculateNumber');
    stubs.withArgs('SUM', 100, 20).returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(spies.calledOnce).to.be.true;
    expect(spies.calledWith('The total is: 10')).to.be.true;
    stubs.restore();
    spies.restore();
  });
});
