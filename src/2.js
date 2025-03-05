// A simple function that takes a number and returns its factorial
function factorial(n) {
  if (n === 0) return 1;
  else return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
