const sendPaymentRequestToApi = require('./3-payment');
const utils = require("./utils");
const sinon = require("sinon");
const chai = require('chai');
const expect = chai.expect;

describe("check for sendPaymentRequestToApi", () => {
  it("validate the use of utils function", () => {
    const spies = sinon.spy(console, 'log')
    const stubs = sinon.stub(utils, 'calculateNumber');
    stubs.calledWith('SUM', 100, 20).returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(spies.calledOnce).to.be.true;
    expect(stubs.calledWith('The total is: 10')).to.be.true;
    spies.restore();
    stubs.restore();
  });
});
