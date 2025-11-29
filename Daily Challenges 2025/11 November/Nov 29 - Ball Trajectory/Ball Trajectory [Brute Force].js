function getNextLocation(matrix) {
  let pos1 = [];
  let pos2 = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const val = matrix[i][j];
      if (val === 1) pos1.push(i, j);
      if (val === 2) pos2.push(i, j);
    }
  }

  let nextPos = [];

  // when on same row
  if (pos1[0] === pos2[0]) {
    let col = pos2[1] > pos1[1] ? pos2[1] + 1 : pos2[1] - 1;
    if (matrix[pos1[0]][col] !== undefined) {
      nextPos.push(pos1[0], col);
    } else {
      nextPos.push(pos1[0], pos1[1]);
    }
    return nextPos;
  }

  // when on same col
  if (pos1[1] === pos2[1]) {
    let row = pos2[0] > pos1[0] ? pos2[0] + 1 : pos2[0] - 1;
    if (matrix[row] !== undefined) {
      nextPos.push(row, pos1[1]);
    } else {
      nextPos.push(pos1[0], pos1[1]);
    }
    return nextPos;
  }

  // when on cross
  let row = pos2[0] > pos1[0] ? pos2[0] + 1 : pos2[0] - 1;
  let col = pos2[1] > pos1[1] ? pos2[1] + 1 : pos2[1] - 1;

  if (row >= matrix.length || row < 0) {
    row = pos1[0];
  }
  if (col >= matrix[0].length || col < 0) {
    col = pos1[1];
  }

  nextPos.push(row, col);

  console.log(`1 appears at [${pos1}]\n2 appears at [${pos2}]`);
  console.log(`Next postion should be: ${nextPos}`);

  return nextPos;
}

// 1,2 - 1
// 2,1 - 2
// 3,0
// corner => previous index

getNextLocation([
  [0, 0, 0, 0],
  [0, 0, 1, 0],
  [0, 2, 0, 0],
  [0, 0, 0, 0],
]);
// // [3, 0]

// 2,1 - 1
// 2,2 - 2
// 2,3

// console.log(
//   getNextLocation([
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 1, 2, 0],
//     [0, 0, 0, 0],
//   ])
// );
// [2, 3]

// 1,0 - 1
// 0,1 - 2
// -1,2
// 1,2

// getNextLocation([
//   [0, 2, 0, 0],
//   [1, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
// ]);
// // [1, 2]

// 3,1 - 1
// 2,0 - 2
// 1,-1
// 1,1

// getNextLocation([
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [2, 0, 0, 0],
//   [0, 1, 0, 0],
// ]);
// // [1, 1]

// 2, 2 - 1;
// 3, 3 - 2;
// 4, 4;
// 2, 2;

// getNextLocation([
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 1, 0],
//   [0, 0, 0, 2],
// ]);
// // [2, 2]
