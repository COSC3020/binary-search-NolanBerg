function binarySearch(numList, element, low = 0, high = numList.length - 1) {
    if (numList.length === 0){
        return -1;
    }
    if (numList.length === 1 && numList[0] === element){
        return 0;
    }
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (numList[mid] === element) {
            let firstOccurrence = mid;
            while (firstOccurrence > 0 && numList[firstOccurrence - 1] === element) {
                firstOccurrence--;
            }
            return firstOccurrence;
        } else if (numList[mid] < element) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1; 


if (typeof module !== 'undefined' && module.exports) {
    module.exports = { binarySearch };
}
