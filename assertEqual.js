const assertEqual = function(actual, expected) {
  let a = actual;
  let b = expected;

  if (a === b) {
    console.log(`✅ Assertion Passed: ${a} === ${b}`);
  } else if (a !== b) {
    console.log(`🛑 Assertion Failed: ${a} !== ${b}`);
  }

};

module.exports = assertEqual;