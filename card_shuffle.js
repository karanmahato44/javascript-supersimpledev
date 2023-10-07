const cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

const shuffle = (array) => {
  let currentIndex = array.length - 1;

  while (currentIndex !== 0) {
    let randomIndex = Math.floor(Math.random() * (array.length - 1))
    let temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
    currentIndex--;
  }
  return array;
}

let result = shuffle(cards);
// result.forEach(item => console.log(item));
console.log(result);