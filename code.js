function binarySearch(numList, element, low = 0, high = numList.length - 1) {
    let firstOccurrence = -1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (numList[mid] === element) {
            firstOccurrence = mid;
            high = mid - 1;
        } else if (numList[mid] < element) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return firstOccurrence;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { binarySearch };
}
