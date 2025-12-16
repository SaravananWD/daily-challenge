/*
Challenge #68

Date: November 21, 2025
Name: LCM
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-21
*/

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

console.log(lcm(4, 6));

// GCD Function from Nov 15 Challenge
function gcd(x, y) {
  let largeNum = Math.max(x, y);
  let smallNum = Math.min(x, y);

  while (smallNum > 0) {
    let remainder = largeNum % smallNum;
    largeNum = smallNum;
    smallNum = remainder;
  }

  return largeNum;
}
