const target = document.querySelector('.target');
const li = document.createElement('li');
li.style.border = '2px solid lightgreen';
// const li2 = document.createElement('li');

li.textContent = 'ADDED TEXT';
// li2.textContent = 'test';

target.append(li);
// target.prepend(li2)

// target.insertBefore(li, document.querySelectorAll('li')[1])