/*
Challenge #61

Date: November 15, 2025
Name: GCD
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-15
*/

function gcd(x, y) {
  let largeNum = Math.max(x, y);
  let smallNum = Math.min(x, y);

  let remainder = Infinity;
  let lastNonZeroRemainder = Infinity;
  while (remainder != 0) {
    lastNonZeroRemainder = remainder;
    remainder = largeNum % smallNum;
    largeNum = smallNum;
    smallNum = remainder;
  }

  return lastNonZeroRemainder;
}
console.log(gcd(20, 15));

/*
Euclidean Algorithm

1 Divide the larger number by the smaller number and find the remainder.

2 Replace the larger number with the smaller number, 
and the smaller number with the remainder.

3 Repeat this process until the remainder is 0.

4 The last non-zero remainder is the GCD.
*/
