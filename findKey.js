const assertEqual = function(actual, expected) {
  let a = actual;
  let b = expected;

  if (a === b) {
    console.log(`✅ Assertion Passed: ${a} === ${b}`);
  } else if (a !== b) {
    console.log(`🛑 Assertion Failed: ${a} !== ${b}`);
  }

};

/* 
Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
*/

const findKey = function (object, callback) {
  for (let key in object) {
    // console.log("this is the key", key)
    // console.log("this is the value", object[key])
  if(callback(object[key])) {
    return key;
  }
}
return undefined

}

let result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

console.log(result)