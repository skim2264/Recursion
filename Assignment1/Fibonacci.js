function fibs(num) {
    var arr = [0,1];
    if (num == 1) {
        return [0];
    } else if (num == 2) {
        return arr;
    } else {
        for (let i=2; i <num; i++) {
            let first = arr[i-2];
            let second = arr[i-1];
            arr.push(first+second);
        }
    }

    return arr;
}

function fibsRec(num, currNum=num-1) {
    if (num == 1) {
        return [0];
    } else if (num == 2) {
        return [0,1];
    } else if (num > 2) {
        return [...fibsRec(currNum), fibsRec(currNum)[currNum-1] + fibsRec(currNum)[currNum-2]];
    }
}

console.log(fibsRec(5));
