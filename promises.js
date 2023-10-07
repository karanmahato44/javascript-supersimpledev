const myPromise = new Promise((resolve, reject) => {
  const fileLoaded = false;
  if (fileLoaded)
    resolve('file loaded!');
  else
    reject('error loading file!');
})

myPromise.then((value) => console.log(value))
  .catch((error) => console.log(error));







const wait = new Promise((resolve) => {
  setTimeout(resolve, 5000);
});

wait.then(() => {
  console.log('thanks for waiting!');
})

