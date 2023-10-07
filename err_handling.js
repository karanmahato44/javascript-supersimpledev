try {
  let num = Number(prompt('enter num?'));
  if (isNaN(num)) {
    throw 'that was not a number';
  } else if (num === 0 || num === ' ') {
    throw 'that was zero'
  }
  console.log(`${num} is a number`);
}

catch (error) {
  console.log(error);
}

finally {
  console.log('this always runs');
}