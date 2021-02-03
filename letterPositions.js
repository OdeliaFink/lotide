const eqArrays = function(arr1, arr2) {
 
  for (i = 0; i < arr1.length; i++) {
    const valueOne = arr1[i]
    const valueTwo = arr2[i]
  
    if (valueOne !== valueTwo) {
      return false 
    }
  }
  return true
   
  }
  
  const assertArraysEqual = function(arrayOne, arrayTwo) {
    if (eqArrays(arrayOne, arrayTwo)) {
      console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`); 
    }
  }

  const letterPositions = function(sentence) {
    const results = {};
    for (i = 0; i < sentence.length; i++) {
      if (results[sentence[i]] === undefined) {
        results[sentence[i]] = []
      }
      results[sentence[i]].push(i) 
    }

    return results;
  };

  assertArraysEqual(letterPositions("hello").e, [1]);
  assertArraysEqual(letterPositions("sunshine").n, [2, 6]);
  assertArraysEqual(letterPositions("goodbye").g, [0]);
  assertArraysEqual(letterPositions("odelia").a, [5]);