const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑Assertion Failed: ${arrayOne} !== ${arrayTwo}`); 
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


//arrays with one or two elemtns, return empty
// arrays with odd numbers, a single middle element should be returned
//arrays with even, the two middle should be returned

const middle = function(array) {
  let middleElement = []

  if (array.length === 1 || array.length === 0) {
    return middleElement;
  }

  if (array.length % 2 === 0) {
    middleElement.push(array[array.length/2 -1]);
    middleElement.push(array[array.length/2]);
  } else {
    middleElement.push(array[Math.floor(array.length / 2)]);
  }
  return middleElement;
}

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);

assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);

assertArraysEqual(middle([]), []);

assertArraysEqual(middle([1]), []);