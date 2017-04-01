/**
 * https://repl.it/languages/nodejs
 */


function fib(n) {
  if (n < 2) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}
console.log("Fib(9) = " + fib(9));


// assert.deepEqual([1,2,3], [1,2,3]);
