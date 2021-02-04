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


const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) return(console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`));
  return (console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`));
}

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

console.log(assertArraysEqual(map([1,2,3], function(element){return element +1}), [2,3,4]));
console.log(assertArraysEqual(map([1,2,3], function(element){return element * 3000}), [2,3,4]));
console.log(assertArraysEqual(map([1,2,3], function(element){return element / 30}), [2,3,4]))