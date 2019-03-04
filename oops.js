//creating a class
var Person = function(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function() {
    console.log('Hey! I am ' + this.name + ' and ' + this.age + 'yrs old');        
};

var sam = new Person('Sam Dsouza', 23);
var david = new Person('David Boon', 33);

sam.introduce();
david.introduce();

//Inheritance
var Employee = function(name, age, company) {
    Person.apply(this, [name, age]);
    //Person(name, age);
    this.company = company;
};

Employee.prototype = new Person();
Employee.prototype.tellCompany = function() {
    console.log('Hi I work at ' + this.company);
};

var employee = new Employee('Mac Donalds', 34, 'CISCO');
console.log(employee);
employee.tellCompany();
employee.introduce();





