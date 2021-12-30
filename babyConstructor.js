/* Write a Baby constructor subclassing Person.
Besides name and age , Baby takes a third argument to initialize favoriteToy .
Besides the methods on Person.prototype, babies have the ability to .play() :
Should return a string "Playing with x", x being the favorite toy. */
const Person = function (name, age) {
  this.name = name;
  this.age = age;
};

Person.prototype.compareAge = function (person) {
  if (person.age > this.age) {
    return `${person.name} is older than me.`;
  } else if (person.age < this.age) {
    return `${person.name} is younger than me.`;
  } else {
    return `${person.name} is the same age as me.`;
  }
};

const p1 = new Person('Samuel', 24);
console.log(p1);

const Baby = function (toy) {
  this.favoriteToy = toy;
};

Baby.prototype = p1;

Baby.prototype.play = function () {
  return `Playing with ${this.favoriteToy}`;
};

const baby = new Baby('Ball');

console.log(baby.play());
console.log(baby);
console.log(baby.name);
