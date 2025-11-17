/*
Challenge #63

Date: November 17, 2025
Name: Rectangle Count
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-16
*/

function countRectangles(width, height) {
  const x = (width * (width + 1)) / 2;
  const y = (height * (height + 1)) / 2;

  return x * y;
}

console.log(countRectangles(1, 3)); // 6
