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
};

const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑Assertion Failed: ${arrayOne} !== ${arrayTwo}`); 
  }
};
