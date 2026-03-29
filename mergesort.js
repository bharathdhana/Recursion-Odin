function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    const merged = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            merged.push(left[leftIndex]);
            leftIndex++;
        } else {
            merged.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort([5, 3, 8, 4, 2]));
console.log(merge([1, 3, 5], [2, 4, 6]));
console.log(mergeSort([]));
console.log(mergeSort([50]));
console.log(mergeSort([5, 3, 8, 4, 2, 1, 7, 6]));



