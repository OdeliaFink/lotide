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

module.exports = eqArrays;