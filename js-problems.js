// console.log(add(3,4));

var MY_APP = {};

MY_APP.add = function() {};
MY_APP.x = 4;

var f = function() {
    for(var i = 0; i < 5; i++) {

    }

    console.log(i);
};
f();

var prod = function(x, y) {
    return  // it will add it here and lead to wrong result;
        x*y;
}

console.log(3 == '3');
console.log( 4 + 'Hello' + 3);
console.log(false == 0);
console.log(3 === '3');
console.log({s: 2} == {s: 2});