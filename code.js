function binarySearch(numList, element, low = 0, high = numList.length - 1) {
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (numList[mid] === element) {
            while (mid > 0 && numList[mid - 1] === element) {
                mid--;
            }
            return mid;
        } else if (numList[mid] < element) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1; 
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { binarySearch };
}
