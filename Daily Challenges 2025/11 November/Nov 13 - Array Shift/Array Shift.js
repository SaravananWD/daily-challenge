/*
Challenge #59

Date: November 13, 2025
Name: Array Shift
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-13
*/

function shiftArray(arr, n) {
  const count = Math.abs(n);
  for (let i = 0; i < count; i++) {
    if (n < 0) {
      const lastValue = arr.pop();
      arr.unshift(lastValue);
    } else {
      const firstValue = arr.shift();
      arr.push(firstValue);
    }
  }
  return arr;
}

console.log(shiftArray([1, 2, 3], 1));
