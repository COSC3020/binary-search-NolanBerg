const assert = require('assert');
const { binarySearch } = require('./code');

assert.strictEqual(binarySearch([], 10), -1, 'Empty array should return -1');

assert.strictEqual(binarySearch([5], 10), -1, 'Single-element array should return -1');

assert.strictEqual(binarySearch([10], 10), 0, 'Single-element array should return 0');

assert.strictEqual(binarySearch([1, 2, 3, 3, 3, 4, 5], 3), 2, 'Should return the index of the first occurrence');


console.log('All tests passed successfully!');
