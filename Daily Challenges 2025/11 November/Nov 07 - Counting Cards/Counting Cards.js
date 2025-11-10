/*
Challenge #44

Date: November 7, 2025
Name: Counting Cards
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-07
*/

function getFactorial(n) {
  let output = 1;
  for (let i = n; i >= 1; i--) {
    console.log();
    output *= i;
  }
  return output;
}

function combinations(cards) {
  const TOTAL_CARDS = 52;
  const output =
    getFactorial(TOTAL_CARDS) /
    (getFactorial(cards) * getFactorial(TOTAL_CARDS - cards));
  return Math.round(output);
}
console.log(combinations(5));
