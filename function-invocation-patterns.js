//Method
var myObj = {
    count: 2,
    inc: function() {
        this.count++;
    }
};
myObj.inc();
console.log(myObj);

//function objects
var add = function(n1, n2) {
    return n1 + n2;
}

console.log(add(2,3));

myObj.double = function() {
    var that = this;
    var helper = function() {
        that.count = add(that.count, that.count);
    };
    helper();
};

myObj.double();
console.log(myObj.count);

//Constructor

var Person = function(name) {
    this.name = name;
}

 Person.prototype.intro = function() {
     console.log('Hello! I am ' + this.name);
 };

 var sam =  new Person('Sam Dsouza');
 sam.intro();

 var david = Person('David Boon');
 console.log(name, david);

 //Apply
 var s = add.apply(null, [2,7]);
 console.log(s);

 var ram = {age: 34};

 Person.apply(ram, ['Ram']);

console.log(ram);

Person.prototype.intro.apply({name: 'Mike'});


 

 

