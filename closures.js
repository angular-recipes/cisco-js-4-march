var f1 = function() {
    var value = 0;

    var f2 = function() {
        value++;
        console.log(value);
    }

    return f2;
};

var f = f1();

f();
f();
f();

//Applications
var myObj = function() {
    var value = 0;

    return {
        increment: function() {
            value++;
        },
        current: function() {
            return value;
        }
    }
}();

console.log(myObj.value);
myObj.increment();
myObj.increment();
console.log(myObj.current());

//timer
var timer = function(n) {
    var step = function() {
        console.log(n--);
        if(n>0) {
            setTimeout(step, 1000);
        }
    }
    step();
};



timer(20);



