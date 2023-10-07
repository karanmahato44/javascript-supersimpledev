function fib(nthfibno) {
  if (nthfibno <= 1) {
    return nthfibno;
  } else {
    return fib(nthfibno - 1) + fib(nthfibno - 2);
  }
}

const nthfib = 6;
const result = fib(nthfib);
console.log(`${nthfib}th fib num is ${result}`);
