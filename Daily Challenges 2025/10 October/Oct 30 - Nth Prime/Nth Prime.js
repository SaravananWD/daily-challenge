/*
Challenge #36

Date: October 30, 2025
Name: Nth Prime
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-30
*/

function nthPrime(n) {
  const isPrime = (number) => {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  };

  let count = 0;
  let prime = 0;
  for (let j = 1; count < n; j++) {
    if (isPrime(j)) {
      count++;
      if (count === n) {
        prime = j;
      }
    }
  }
  return prime;
}

console.log(nthPrime(1000));
