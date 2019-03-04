var add = function(n1, n2) {
    return n1 + n2;
};

var product = function(n1, n2) {
    return n1*n2;
}

Function.prototype.curry = function() {
    var slice = Array.prototype.slice;
    var that = this;
    var args = slice.apply(arguments);
    return function() {
        return that.apply(null, slice.apply(arguments).concat(args));
    }
};

var add1 =  add.curry(1);

var double = product.curry(2);

console.log(add1(23));
console.log(double(23));
