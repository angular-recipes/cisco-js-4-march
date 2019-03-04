var fibonacci = function (n) {
    if (n <= 0) { return 0; }
    if (n == 1) { return 1; }

    return fibonacci(n - 1) + fibonacci(n - 2);
};

for( var i = 0; i < 10; i++) {
    console.log(fibonacci(i));
}

var reverseArray = function(arr) {
    if(arr.length <= 1) {
        return arr;
    }

    var firstElement = arr[0];
    var remainingArray = arr.slice(1);

    var reversedRemainingArray = reverseArray(remainingArray);
    return reversedRemainingArray.concat(firstElement);
}

console.log(reverseArray([2,6,1,3,22]));


