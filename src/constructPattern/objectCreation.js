function Car(
  arg = {
    wheels: 4,
  }
) {
  this.wheels = arg.wheels;
}

Car.prototype.showInfo = function showInfo() {
  console.log(`This car has ${this.wheels} wheels`);
};

export default function main() {
  const car = new Car();

  car.showInfo();
}
