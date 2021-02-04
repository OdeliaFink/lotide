const assertEqual = function(actual, expected) {
  let a = actual;
  let b = expected;
  if (a === b) {
    console.log(`✅✅✅ Assertion Passed: ${a} === ${b}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${a} !== ${b}`); 
  }
};

const eqObjects = function(object1, object2) {
  for (const key in object1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }  
  return true;
  };


const assertObjectsEqual = function(actual, expected) {
    if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    }
    else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)    }
  };

  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "5" }
  assertObjectsEqual(eqObjects(ab, ba), false); 
  