const assert = require("assert");
const calculateNumber = require("./1-calcul.js");
const chai = require('chai');
const expect = chai.expect

describe('check for rounded values', () => { 
  it("should return the sum of the two argument supplied", function() {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
  it("testing for negative numbers", () => {
    expect(calculateNumber('SUM', -1, -4)).to.equal(-5); 
    expect(calculateNumber('SUBTRACT', -1.4, -4.5)).to.equal(3);
    expect(calculateNumber('DIVIDE', -1.4, -4.5)).to.equal(0.25);
    expect(calculateNumber('DIVIDE', -1.4, 0)).to.equal('Error');
  });
});
