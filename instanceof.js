/**
 * This instanceof operator return true, it the prototype of a constructor appears in the prototype chain of an object.
 * syntax : object instanceof constructor
 *
 */
// function constructor
function Person(name) {
  this.name = name;
}
const john = new Person("John");
console.log(john); // {name: "john"}
console.log(john instanceof Person); // true

// ES6 class and instanceof operator

class Person2 {
  constructor(name) {
    this.name = name;
  }
}

const jason = new Person2("Jason");
console.log(jason); //{name:  "Jason"}
console.log(jason instanceof Person); // false
console.log(jason instanceof Person2); // true
console.log(jason instanceof Object); // true

// The instanceof operator and inheritance
class Employee extends Person2 {
  constructor(title, name) {
    super(name);
    this.title = title;
  }
}

let employee = new Employee("Jr. developer", "Jason");
console.log(employee);
console.log(employee instanceof Employee); //true
console.log(employee instanceof Person2); //true
console.log(employee instanceof Object); //true

// Symbol.hasInstance
console.log(Person[Symbol.hasInstance](john)); //true
console.log(Person[Symbol.hasInstance](jason)); //false

console.log(Person2[Symbol.hasInstance](jason)); //true
console.log(Person2[Symbol.hasInstance](john)); //false

console.log(Person2[Symbol.hasInstance](employee)); //true
console.log(Employee[Symbol.hasInstance](employee)); //true
console.log(Object[Symbol.hasInstance](employee)); //true

// check string with instanceof
let name = "Karim";
console.log(name instanceof String); // false
console.log(name instanceof Object); // false

let name2 = String("Lal Vai");
console.log(name2 instanceof String); // false
console.log(name2 instanceof Object); // false
console.log(String instanceof Object); // true
