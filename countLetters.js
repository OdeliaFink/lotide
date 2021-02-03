const assertEqual = function(actual, expected) {
  let a = actual;
  let b = expected;

  if (a === b) {
    console.log(`✅ Assertion Passed: ${a} === ${b}`);
  } else if (a !== b) {
    console.log(`🛑 Assertion Failed: ${a} !== ${b}`);
  }

};
//function should take string and could amount of each

const countLetters = function(str) {
  str = str.replace(/\s/g, ''); 
let count = {};
// const keysOfStr = Object.keys(str)

for (const key of str) {
  // console.log("this is the key:", key, "this object:", str)
  const value = str[key]
  if (count[key]) {
    count[key] += 1;
  } else {
    count[key] = 1
  }
  }
return count;
};

console.log(countLetters("lighthouse is loopy"));