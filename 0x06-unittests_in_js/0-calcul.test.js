const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe('check for rounded values', () => { 
  it("should return the sum of the two argument supplied", function() {
    const a1 = calculateNumber(1.2, 3.7);
    assert(a1, 5);
  });
});

describe('check for rounded values', () => { 
  it("should return the sum of the two argument supplied", function() {
    const a2 = calculateNumber(1.2, 3);
    assert(a2, 4);
  });
});

describe('check for rounded values', () => { 
  it("should return the sum of the two argument supplied", function() {
    const a3 = calculateNumber(1, 3.7);
    assert(a3, 5);
  });
});

describe('check for rounded values', () => { 
  it("should return the sum of the two argument supplied", function() {
    const a4 = calculateNumber(1.5, 3.7);
    assert(a4, 6);
  });
});
