function binarySearch(numList, element, low, high) {
    if (high >= low) {
        var mid = Math.floor((low + high) / 2);
        if (numList[mid] === element) {
            return mid;
        } else if (numList[mid] > element) {
            return binarySearch(numList, element, low, mid - 1);
        } else {
            return binarySearch(numList, element, mid + 1, high);
        }
    } else if (numList.length === 1 && numList[0] === element) {
        return 0;
    } else {
        return -1;
    }
}

module.exports = {
    binarySearch
};
