const assertEqual = require('../assertEqual')
const tail = require('../tail')


const words = ["Yo Yo", "Lighthouse", "Labs", "Odelia"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 2); // original array should still have 3 elements!
assertEqual(words[1], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(words[0], "Odelia");
assertEqual(words[1], "Lighthouse"); // ensure second element is "Lighthouse"