/*
Challenge #51

Challenge Date: September 22, 2025
Name: Digits vs Letters
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-22
Completed Date: November 11, 2025
*/

function digitsOrLetters(str) {
  const cleanString = str.replace(/[^A-Za-z0-9]/g, "");

  const letters = cleanString
    .split("")
    .filter((char) => /[a-zA-Z]/.test(char)).length;
  const digits = Math.abs(cleanString.length - letters);

  if (digits > letters) return "digits";
  if (letters > digits) return "letters";
  else return "tie";
}
console.log(digitsOrLetters("a1b2c3d"));
