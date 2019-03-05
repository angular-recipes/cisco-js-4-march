const add = (x,y) =>  x + y;
const square = n => n*n;

let myObj = {
    count: 2,
    inc: function() {
        this.count++;
    }
};
myObj.double = () => {
    const helper = () => this.count = add(this.count, this.count);
    helper();
};

myObj.double();
console.log(myObj.count);

//default parameters
let f = (a, b=10) => a + b;

console.log(f(20));

let g = (a=10, b) => a + b;

console.log(g(20)); //NaN, a becomes 20, b undefined





