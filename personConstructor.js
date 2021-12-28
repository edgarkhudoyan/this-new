/* Write a Person Constructor that initializes name and age from arguments.
All instances of Person should initialize with an empty stomach array.
Give instances of Person the ability to .eat("someFood") :
When eating an edible, it should be pushed into the stomach .
The eat method should have no effect if there are 10 items in the stomach .
Give instances of Person the ability to .poop() :
When an instance poops, its stomach should empty.
Give instances of Person a method .toString() :
It should return a string with name and age . Example: "Mary, 50" */

const Person = function (name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
};

Person.prototype.eat = function () {
  for (let i = 0; i < arguments.length; i++) {
    if (this.stomach.length < 10 && typeof arguments[i] === 'string') {
      this.stomach.push(arguments[i]);
    }
  }
  return this.stomach;
};

Person.prototype.poop = function () {
  this.stomach = [];
  return this.stomach;
};

Person.prototype.toString = function () {
  return `${this.name}, ${this.age}`;
};

const p1 = new Person('Samuel', 24);

console.log(p1.eat('chicken', 'cheese'));
console.log(p1.poop());
console.log(p1.toString());
