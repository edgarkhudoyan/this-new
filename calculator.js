/* Create functions for the Calculator class that can do the following:
Add two numbers.
Subtract two numbers.
Multiply two numbers.
Divide two numbers. */

const Calculator = function (a, b) {
  this.a = a;
  this.b = b;
};

Calculator.prototype.add = function (num1, num2) {
  return num1 + num2;
};
Calculator.prototype.subtract = function (num1, num2) {
  return num1 - num2;
};
Calculator.prototype.multiply = function (num1, num2) {
  return num1 * num2;
};
Calculator.prototype.divide = function (num1, num2) {
  return num1 / num2;
};

const calc = new Calculator();

console.log(calc.add(10, 7));
console.log(calc.subtract(10, 3));
console.log(calc.multiply(10, 7));
console.log(calc.divide(10, 2));
