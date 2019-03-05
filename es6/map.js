let person = new Map();

person.set('name', 'John');
person.set('name', 'David');
person.set('employeeId', 2332323);
person.set('hobbies', ['singing', 'dancing', 'painting']);

console.log(person);
console.log(person.get('hobbies'));
console.log(person.keys());
console.log(person.values());

for(el of person) {
    console.log(el);
}

for([key, value] of person) {
    console.log(key, value);
}

for(key of person.keys()) {
    console.log(key);
}

let m = new Map();

console.log(m);



