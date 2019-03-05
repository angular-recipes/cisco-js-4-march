const sumOfElementsOfArray = (...arr) => {
    let sum = 0;
    for(let e of arr) {
        sum += e;
    }
    return sum;
}

console.log( sumOfElementsOfArray(2,5,7,1, 'Hello') );

//another example
let arr = [2,7,1,44,21];
let l = Math.max(...arr);
console.log(l);
