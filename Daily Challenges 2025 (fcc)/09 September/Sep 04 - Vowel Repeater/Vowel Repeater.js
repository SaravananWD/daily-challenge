/*
Challenge #87

Date: September 4, 2025
Name: Vowel Repeater
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-04
*/

function repeatVowels(str) {
  const VOWELS = new Set(["a", "e", "i", "o", "u"]);

  let updated = "";
  let count = 1;
  for (let char of str) {
    const lowerChar = char.toLowerCase();

    if (VOWELS.has(lowerChar)) {
      updated += char + lowerChar.repeat(count - 1);
      count++;
    } else updated += char;
  }

  return updated;
}
console.log(repeatVowels("AEIOU"));
