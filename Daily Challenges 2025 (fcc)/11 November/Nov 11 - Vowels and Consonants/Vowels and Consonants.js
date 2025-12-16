/*
Challenge #48

Date: November 11, 2025
Name: Vowels and Consonants
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-11
*/

function count(str) {
  const VOWELS = ["a", "e", "i", "o", "u"];

  const alphabets = str.replace(/[^A-Za-z]/g, "").toLowerCase();

  return alphabets.split("").reduce(
    (counts, char) => {
      VOWELS.includes(char) ? counts[0]++ : counts[1]++;
      return counts;
    },
    [0, 0]
  );
}
console.log(count("Hello, World!"));
