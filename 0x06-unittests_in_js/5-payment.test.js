const sendPaymentRequestToApi = require('./5-payment.js');
const utils = require("./utils");
const sinon = require("sinon");
const chai = require('chai');
const expect = chai.expect;

describe("Verify two tests", () => {
  let spies;
  beforeEach(() => spies = sinon.spy(console, "log"));
  afterEach(() => spies.restore());

  it("Verify that the console is logging the string The total is: 120", () => {
    sendPaymentRequestToApi(100, 20)
    expect(spies.calledOnce).to.be.true;
    expect(spies.calledWith('The total is: 120')).to.be.true
  });

  it("Verify that the console is logging the string The total is: 20", () => {
    sendPaymentRequestToApi(10, 10)
    expect(spies.calledOnce).to.be.true;
    expect(spies.calledWith('The total is: 20')).to.be.true
  });
});
