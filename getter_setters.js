class Car {
  constructor(model) {
    this._gas = 50;
    this._model = model;
  }

  get model() {
    return this._model;
  }

  get gas() {
    return `${this._gas}L ${this._gas / 100 * 100}%`;
  }

  set gas(value) {
    if (value > 100) {
      value = 100;
    } else if (value < 0) {
      value = 0;
    }
    this._gas = value;
  }
}

const car = new Car('Ford');
console.log(car.model);
console.log(car.gas);
car.gas = 100;
console.log(car.gas);