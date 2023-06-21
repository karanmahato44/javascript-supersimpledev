const person = {
  name: 'kyto',
  age: 22,
  foo: 'bar'
};

const anotherPerson = {...person, name: 'karan'}

console.log(anotherPerson);


const names = ['karan', 'kyto']
const morenames = [...names, 'foo']
console.log(morenames);