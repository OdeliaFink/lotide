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

const without = function(source, itemsToRemove) {
let newArray = [];
for (let key in source) {
  if(source[key] !== itemsToRemove[key]){
    // console.log("this is the source:", source[i]);
    // console.log("this is items removed", itemsToRemove[i]);
    newArray.push(source[key]);
  }
}
return newArray;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);