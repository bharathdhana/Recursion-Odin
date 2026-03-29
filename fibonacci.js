function fibs(n){
    if (n <= 0) return [];
    if (n === 1) return [0];
    const fibsArray = [0, 1];
    for (let i = 2; i < n; i++) {
        fibsArray[i] = fibsArray[i - 1] + fibsArray[i - 2];
    }
    return fibsArray;
}


function fibsRec(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    const fibsArray = fibsRec(n - 1);
    fibsArray.push(fibsArray[fibsArray.length - 1] + fibsArray[fibsArray.length - 2]);
    return fibsArray;
}

console.log(fibs(10));
console.log(fibsRec(10));
