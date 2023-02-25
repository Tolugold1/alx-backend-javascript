const assert = require("assert");
const calculateNumber = require('./2-calcul_chai.js');
const chai = require('chai');
const expect = chai.expect

describe('check for type === SUM', () => { 
  it('should return the sum of the two argument supplied', function() {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    expect(calculateNumber('SUM', -1, -4)).to.equal(-5); 
  });
});
describe('Check for type === SUBTRACT', () => {
  it("should subtract two numbers", () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    expect(calculateNumber('SUBTRACT', -1.4, -4.5)).to.equal(3);
  });
});
describe('Check for type === DIVIDE', () => {
  it("should divide two numbers", () => {
    expect(calculateNumber('DIVIDE', -1.4, -4.5)).to.equal(0.25);
    expect(calculateNumber('DIVIDE', -1.4, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
});





