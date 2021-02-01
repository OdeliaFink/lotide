const assertEqual = function(actual, expected) {
  let a = actual;
  let b = expected;
  if (a === b) {
    console.log(`✅ Assertion Passed: ${a} === ${b}`);
  } else if (a !== b) {
    console.log(`🛑 Assertion Failed: ${a} !== ${b}`);
  }
};

const head = function(array) {
  return array[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Palm tree", "Maple tree"]), "Cedar tree");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([2,3,4,5]), 1);