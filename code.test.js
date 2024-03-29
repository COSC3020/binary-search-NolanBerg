const jsc = require('jsverify');
const { binarySearch } = require('./code.js'); 

const testSearch = jsc.forall('array nat', function (arr) {
    if (arr.length > 0) {
        arr.sort(function (a, b) { return a - b; });
        return binarySearch(arr, arr[0]) === 0;
    } else {
        return binarySearch(arr, 10) === -1;
    }
});

jsc.assert(testSearch);
