/*
Challenge #84

Date: September 7, 2025
Name: Roman Numeral Parser
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-07
*/

function parseRomanNumeral(numeral) {
  const ROMAN = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let prevS = "";
  let total = 0;
  for (let s of numeral) {
    let n = ROMAN[s];
    if (prevS < n) {
      n = n - prevS;
      total = total - prevS;
    }
    prevS = n;
    total += n;
  }

  return total;
}

console.log(parseRomanNumeral("IV"));
