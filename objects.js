var person = {
    name: 'Sam',
    age: 29,
    address: {
        city: 'Banglore',
        state: 'Karnataka'
    },
    introduce: function() {
        return this.name + ', ' + this.age + ' from ' + this.address.city + ', ' + this.address.state;
    }
};

console.log(person.name);
console.log(person.age);
console.log(person.introduce());

person.name = 'David';
person.sayHello = function() {
    console.log('Hello! I am ' + this.name);
}

console.log(person.name);
person.sayHello();

delete person.age;
console.log(person);

//creating using constructor functions
var Person = function(name) {
    this.name = name;
};

Person.prototype.city = 'Banglore';

var person1 = new Person('Sam');
var person2 = new Person('David');
var person3 = new Person('Mike');

console.log(person1.city, person2.city, person3.city);


// s = {};
// s.name = 'Sam'
// return s;

//Prototypes the prototype way
if(typeof Object.create !== 'function') {
    Object.create = function(o) {
        var F = function() {};
        F.prototype = o;
        return new F();
    }
}

var mammal = {
    numOfLegs: 4,
    move: function() {
        console.log('walking');
    },
    speak: function() {
        console.log('default sound');
    }
};

var cat = Object.create(mammal);

cat.speak = function() {
    console.log('meaowww');
};

console.log(cat.numOfLegs);
cat.speak();











