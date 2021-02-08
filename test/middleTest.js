const middle = require('../middle')
const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#middle", () => { //grouping for a bunch of small tests 
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    const result = middle([1,2,3,4,5])
    assert.deepEqual(result, [3]);
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    const result = middle([1,2,3,4,5, 6])
    assert.deepEqual(result, [3, 4]);
  })

  it("returns [] for []", () => {
    const result = middle([])
    assert.deepEqual(result, []);
  })

  it("returns [] for [1]", () => {
    const result = middle([1])
    assert.deepEqual(result, []);
  })
});

// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
// assertArraysEqual(middle([]), []);
// assertArraysEqual(middle([1]), []);