/*
Challenge #77

Date: September 13, 2025
Name: Missing Numbers
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-13
*/

function findMissingNumbers(arr) {
  const sorted = arr
    .sort((a, b) => a - b)
    .filter((num, i) => i === arr.indexOf(num));

  const n = sorted[sorted.length - 1];
  const missing = [];

  for (let i = 1; i <= n; i++) {
    if (!arr.includes(i)) {
      missing.push(i);
    }
  }

  return missing;
}

console.log(findMissingNumbers([10, 1, 10, 1, 10, 1]));
