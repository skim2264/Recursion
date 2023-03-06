function mergeSort(arr) {
    if (arr.length == 1) return arr;
    const mid = Math.floor(arr.length/2)
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(leftArr, rightArr) {

    let merged = [];
    let li = 0;
    let ri = 0;

    while (li < leftArr.length && ri < rightArr.length) {
        if (leftArr[li] < rightArr[ri]) {
            merged.push(leftArr[li]);
            li++;
        } else if (leftArr[li] > rightArr[ri]) {
            merged.push(rightArr[ri]);
            ri++;
        }
    }

    while (li < leftArr.length) {
        merged.push(leftArr[li]);
        li++;
    }

    while (ri < rightArr.length) {
        merged.push(rightArr[ri]);
        ri++;
    }

    return merged;
}

console.log(mergeSort([33,2,35,66,11,3,45]));