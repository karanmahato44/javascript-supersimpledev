// document.cookie = 'name=karan; expires=Sun, 1 January 2030 12:00:00 UTC; path=/';
// document.cookie = 'anothername=karan; expires=Sun, 1 January 2000 12:00:00 UTC; path=/'; // expire
// console.log(document.cookie);

const nameInputElm = document.querySelector('#name');
const emailInputElm = document.querySelector('#email');
const setcookiebtn = document.querySelector('#setcookiebtn');
const getcookiebtn = document.querySelector('#getcookiebtn');

setcookiebtn.addEventListener('click', () => {
  setCookie('name', nameInputElm.value, 365);
  setCookie('email', emailInputElm.value, 365);
});

getcookiebtn.addEventListener('click', () => {
  nameInputElm.value = getCookie('name');
  emailInputElm.value = getCookie('email');
});

function setCookie(name, value, daysToLive) {
  const date = new Date();
  date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
  let expires = 'expires=' + date.toUTCString();
  document.cookie = `${name}=${value}; ${expires}; path = /`;
}

function deleteCookie(name) {
  setCookie(name, null, null);
}

function getCookie(name) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split('; ');
  let result = null;
  cookieArray.forEach((item) => {
    if (item.indexOf(name) === 0) {
      result = item.substring(name.length + 1);
    }
  })
  return result;
}