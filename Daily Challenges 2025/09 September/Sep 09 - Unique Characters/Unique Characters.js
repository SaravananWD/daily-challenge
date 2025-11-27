/*
Challenge #82

Date: September 9, 2025
Name: Unique Characters
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-09
*/

function allUnique(str) {
  return str.split("").every((s, i) => str.indexOf(s) === i);
}

console.log(allUnique("QwErTy123!@"));
