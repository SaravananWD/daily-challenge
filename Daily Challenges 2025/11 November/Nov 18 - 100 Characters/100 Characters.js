/*
Challenge #65

Date: November 18, 2025
Name: 100 Characters
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-18
*/

function oneHundred(chars) {
  const len = chars.length;
  const reps = Math.ceil(100 / len);

  return chars.repeat(reps).slice(0, 100);
}

console.log(oneHundred("One hundred "));
