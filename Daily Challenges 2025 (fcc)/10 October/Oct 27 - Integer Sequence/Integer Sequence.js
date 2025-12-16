/*
Challenge #33

Date: October 27, 2025
Name: Integer Sequence
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-27
*/

function sequence(n) {
  let str = "";

  for (let i = 1; i <= n; i++) {
    str += i;
  }

  return str;
}

console.log(sequence(27));
