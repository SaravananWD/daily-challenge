/*
Challenge #49

Challenge Date: September 24, 2025
Name: Perfect Square
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-24
Completed Date: November 11, 2025
*/

function isPerfectSquare(n) {
  const limit = n !== 1 ? Math.floor(n / 2) : n;
  for (let i = 0; i <= limit; i++) {
    if (i * i === n) {
      return true;
    }
  }
  return false;
}
console.log(isPerfectSquare(1));
