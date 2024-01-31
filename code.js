
function binarySearch(numList, element, low, high) {
    if (high >= low) {
        var mid = Math.floor((low + high) / 2);
        if (numList[mid] === element) {
            while (mid > 0 && numList[mid - 1] === element) {
                mid--;
            }
            return mid;
        } else if (numList[mid] > element) {
            return binarySearch(numList, element, low, mid - 1);
        } else {
            return binarySearch(numList, element, mid + 1, high);
        }
    } else {
        return -1;
    }
}

module.exports = {
    binarySearch
};
