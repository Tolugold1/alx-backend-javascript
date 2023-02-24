const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe('check for rounded values', () => { 
  it("should return the sum of the two argument supplied", function() {
    const a1 = calculateNumber(1.2, 3.7);
    assert.equal(a1, 5);
    const a2 = calculateNumber(1.2, 3);
    assert.equal(a2, 4);
    const a3 = calculateNumber(1, 3.7);
    assert.equal(a3, 5);
    const a4 = calculateNumber(1.5, 3.7);
    assert.equal(a4, 6);
  });
  it("testing for negative numbers", () => {
    const a1 = calculateNumber(-1, -3);
    assert.equal(a1, -4);
    const a2 = calculateNumber(-1.2, -1.1);
    assert.equal(a2, -2);
    const a3 = calculateNumber(-1, 1);
    assert.equal(a3, 0);
  });
  it("check if arguments is a number or not", () => {
    assert.equal(isNaN(calculateNumber(1.2)), true)
  })
});
