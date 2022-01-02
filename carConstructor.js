/*  Write a Car constructor that initializes model and milesPerGallon from arguments.
All instances built with Car:
should initialize with an tank at 0
should initialize with an odometer at 0
Give cars the ability to get fueled with a .fill(gallons) method. Add the gallons to tank . - STRETCH: Give cars ability to .drive(distance) . The
distance driven:
Should cause the odometer to go up.
Should cause the the tank to go down taking milesPerGallon into account.
STRETCH: A car which runs out of fuel while driving can't drive any more distance: */

const Car = function (model, milesPerGallon) {
  this.tank = 0;
  this.odometer = 0;
};

Car.prototype.fill = function (gallons) {
  this.tank += gallons;
  return gallons;
};

Car.prototype.drive = function (distance) {
  for (let i = 0; i < distance; i++) {
    if (this.tank > 0) {
      this.odometer++;
      this.tank--;
    } else {
      return `Out of tank. Fuel me up!!!`;
    }
  }
};

let carOne = new Car('Mercedes', 200);

carOne.fill(300);
carOne.drive(250);

console.log(carOne);
