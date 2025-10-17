/*
Challenge #23

Date: October 17, 2025
Name: Credit Card Masker
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-17
*/
function mask(card) {
  const char = card[4];
  const lastFourDigit = card.slice(15);

  return `****${char}****${char}****${char}${lastFourDigit}`;
}
console.log(mask("4012-8888-8888-1881"));
