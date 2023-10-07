const t1 = setTimeout((item, cost) => {
  alert(`buy ${item} please, it's just ${cost}`);
}, 3000, 'best trading course', '10000 only');

document.querySelector('#buybtn').addEventListener('click', () => {
  clearTimeout(t1);
  alert('bought sirs!');
});