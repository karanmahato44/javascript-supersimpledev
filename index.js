const element = document.querySelector('.int');
const item = Array.from(element.children);
console.log(item);
item.forEach(item => {
  item.style.backgroundColor = 'lightgreen';
})


const h2elm = document.createElement('h2');
h2elm.textContent = window.prompt('enter');
document.body.append(h2elm);
