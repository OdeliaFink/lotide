const assertEqual = function(actual, expected) {
  let a = actual;
  let b = expected;

  if (a === b) {
    console.log(`✅ Assertion Passed: ${a} === ${b}`);
  } else if (a !== b) {
    console.log(`🛑 Assertion Failed: ${a} !== ${b}`);
  }

};

const eqArrays = function(arr1, arr2) {

  for (let i = 0; i < arr1.length; i++) {
    let valueOne = arr1[i];
    let valueTwo = arr2[i];
    if (valueOne !== valueTwo) {
      return false
    }
  }
  return true
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false