/*
Challenge #73

Date: November 26, 2025
Name: BuzzFizz
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-26
*/

function isFizzBuzz(sequence) {
  for (let i = 1; i <= sequence.length; i++) {
    const val = sequence[i - 1];

    if (i === val && i % 3 !== 0 && i % 5 !== 0) continue;
    if (i % 3 === 0 && i % 5 === 0 && val === "FizzBuzz") continue;
    if (i % 3 === 0 && val === "Fizz") continue;
    if (i % 5 === 0 && val === "Buzz") continue;

    return false;
  }

  return true;
}

console.log(isFizzBuzz([1, 2, "Fizz"]));
