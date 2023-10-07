// belongs to the class not the objects
// ex. Math.random(), don't need, const mymath = new Math();

class Cars {
  static carCount = 0;
  constructor(name) {
    this.name = name;
    Cars.carCount++;
  }

  static startRace() {
    console.log('3....2.....1.....GO!');
  }
}

const car1 = new Cars('Ford');
const car2 = new Cars('Mustang');
const car3 = new Cars('Yamaha');

console.log(Cars.carCount);
// car1.startRace(); // won't work
Cars.startRace();