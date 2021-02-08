const assertEqual = require('../assertEqual')
const head = require('../head')

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Palm tree", "Maple tree"]), "Cedar tree");
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([2,3,4,5]), 1);