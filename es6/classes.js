class Person {
    static count() {
        console.log('counting..')
    }

    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log('Hello I am ' + this.name);
    }

    xyz() {

    }
}

class Employee extends Person {
    constructor(name, employeeCode) {
        super(name);
        this.employeeCode = employeeCode;
    }

    introduce() {
        console.log('Hello I am ' + this.name + ': ' + this.employeeCode);
    }
}

let p = new Person('Ram');
Person.count();
console.log(Person.count);

p.introduce();

let e = new Employee('Sam', 121212);
e.introduce();

console.log(e);

//Getters and Setters

class People {
    constructor(n, a) {
        this.n = n;
        this.a = a;
    }
    get name() {
        return this.n;
    }
    set name(n) {
        this.n = n;
    }
    get age() {
        return this.a;
    }
    set age(a) {
        this.a = a;
    }

}
let person = new People("Jon Snow");
console.log(person.name);
person.name = "Dany";
console.log(person.name);
// console.log(cart.getTotalValue());
// console.log(cart.totalValue);



