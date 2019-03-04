var memo = [0, 1];

var fibonacci = function (n) {
    if (typeof memo[n] == 'number') {
        return memo[n];
    } else {
        var result = fibonacci(n - 1) + fibonacci(n - 2);
        memo[n] = result;
        return result;
    }
};

for (var i = 0; i < 10; i++) {
    console.log(fibonacci(i));
}

