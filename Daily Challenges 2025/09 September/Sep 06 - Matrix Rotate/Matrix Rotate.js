/*
Challenge #85

Date: September 6, 2025
Name: Matrix Rotate
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-06
*/

function rotate(matrix) {
  const rows = matrix.length;
  const cols = matrix[0]?.length;

  const rotate = [];
  for (let c = 0; c < cols; c++) {
    const newRow = [];
    for (let r = rows - 1; r >= 0; r--) {
      newRow.push(matrix[r][c]);
    }
    rotate.push(newRow);
  }

  return rotate;
}

console.log(
  rotate([
    [1, 2],
    [3, 4],
  ])
);
