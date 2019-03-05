let x = 30;

if(true) {
    let x = 20;
};

console.log(x);

const NUM_OF_PEOPLE = 20;
//NUM_OF_PEOPLE = 30;

const person = {name: 'Sam'};
//const person = Object.freeze({name: 'Sam'}); //truly immutable
person.name = 'David';
console.log(person);


