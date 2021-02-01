const assertEqual = function(actual, expected) {
  let a = actual;
  let b = expected;
  if (a === b) {
    console.log(`✅ Assertion Passed: ${a} === ${b}`);
  } else if (a !== b) {
    console.log(`🛑 Assertion Failed: ${a} !== ${b}`);
  }
};

const tail = function(array) {
  return array.slice(1)
};

const words = ["Yo Yo", "Lighthouse", "Labs", "Odelia"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 2); // original array should still have 3 elements!
assertEqual(words[1], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(words[0], "Odelia"); 
assertEqual(words[1], "Lighthouse"); // ensure second element is "Lighthouse"
