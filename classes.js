class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Cat extends Animal {
  constructor(name, age, meowrate) {
    super(name, age);
    this.meowrate = meowrate;
  }
}

class Dog extends Animal {
  constructor(name, age, woofrate) {
    super(name, age);
    this.woofrate = woofrate;
  }
}

const myCat = new Cat('tom', 4, 10);
const myDog = new Dog('kalu', 3, 20);

console.log(myCat.name);
console.log(myCat.meowrate);
myCat.name = 'tommy';
console.log(myCat.name);