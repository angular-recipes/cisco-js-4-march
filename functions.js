var num1 = 3;
var add = function (n1, n2) {
    return n1 + n2;
};
console.log(add(3,4));

var average  = function(n1, n2, adderFunction) {
    return adderFunction(n1, n2)/2;
};

console.log(average( 3, 6, function (n1, n2){
    return n1 + n2;
}));


