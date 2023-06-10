const karan = {
  address: 'agyauli',
  age: 22
};

const stringified = JSON.stringify(karan);
console.log(stringified);


const backToObj = JSON.parse(stringified);
console.log(backToObj);
console.log(typeof backToObj);