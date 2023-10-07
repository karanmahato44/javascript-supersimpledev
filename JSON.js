const karan = {
  address: 'agyauli',
  age: 22
};

const stringified = JSON.stringify(karan);
console.log('string', stringified);


const backToObj = JSON.parse(stringified);
console.log('object', backToObj);
console.log(typeof backToObj);