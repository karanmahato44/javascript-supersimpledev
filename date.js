const div = document.querySelector('.date');
setInterval(() => {
  div.innerHTML = (new Date()).toLocaleString();
  // div.innerHTML = date.toLocaleString();
}, 1000);