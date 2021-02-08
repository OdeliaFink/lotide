const assertArraysEqual  = require("../assertArraysEqual");

assertArraysEqual([1, 3, 3], [1, 2, 3]);
assertArraysEqual([1, 3, 3], [8, 2, 4]);
assertArraysEqual([1, 3, 3], [1, 3, 3]);