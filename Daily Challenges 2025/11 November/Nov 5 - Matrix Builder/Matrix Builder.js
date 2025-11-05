/*
Challenge #42

Date: November 5, 2025
Name: Matrix Builder
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-05
*/

function buildMatrix(rows, cols) {
  const matrix = [];

  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(0);
    }
    matrix.push(row);
  }

  return matrix;
}
console.log(buildMatrix(2, 3));
