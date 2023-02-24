const assert = require("assert");
const calculateNumber = require("./1-calcul.js");

describe('check for rounded values', () => { 
  it("should return the sum of the two argument supplied", function() {
    const a1 = calculateNumber('SUM', 1.4, 4.5)
    assert.equal(a1, 6);
    const a2 = calculateNumber('SUBTRACT', 1.4, 4.5)
    assert.equal(a2, -4);
    const a3 = calculateNumber('DIVIDE', 1.4, 4.5)
    assert.equal(a3, 0.2);
    const a4 = calculateNumber('DIVIDE', 1.4, 0)
    assert.equal(a4, 'Error');
  });
  it("testing for negative numbers", () => {
    const a1 = calculateNumber('SUM', -1, -4)
    assert.equal(a1, -5); 
    const a2 = calculateNumber('SUBTRACT', -1.4, -4.5)
    assert.equal(a2, 3);
    const a3 = calculateNumber('DIVIDE', -1.4, -4.5)
    assert.equal(a3, 0.25);
    const a4 = calculateNumber('DIVIDE', -1.4, 0)
    assert.equal(a4, 'Error');
  });
});
