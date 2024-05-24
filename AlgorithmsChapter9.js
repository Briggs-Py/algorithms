//Chapter 9 - Recursion

//Recursive Sigma
console.log("Recursive Sigma:")
//Write a recursive function that given a number, returns sum of integers from 1 to that number.
function rSigma(n) {
  if (n <= 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return n + rSigma(n - 1);
}
console.log(rSigma(3));

//Recursive Factorial
console.log("\nRecursive Factorial:")
//Write a function that given 'num', return the product of integers from 1 up to that 'num'.
function rFactorial(n) {
  if (n <= 0) {
    return 1;
  }
  if (n === 1) {
    return 1;
  }
  return n * rFactorial(n - 1);
}

console.log(rFactorial(6));

