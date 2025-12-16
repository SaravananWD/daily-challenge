/*
Challenge #46

Date: November 9, 2025
Name: Word Search
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-09
*/

function findWord(matrix, word) {
  const len = word.length - 1;

  const getEnd = (row, start) => {
    const directions = {
      left: { status: matrix[row][start - len], position: [row, start - len] },
      right: { status: matrix[row][start + len], position: [row, start + len] },
      top: {
        status: matrix[row - len] ? matrix[row - len][start] : null,
        position: [row - len, start],
      },
      bottom: {
        status: matrix[row + len] ? matrix[row + len][start] : null,
        position: [row + len, start],
      },
    };

    const matchDirection = Object.keys(directions).filter(
      (x) => directions[x].status === word[len]
    );

    return matchDirection.length !== 0
      ? [...directions[matchDirection[0]].position]
      : null;
  };

  const output = [];
  for (let i = 0; i < matrix.length; i++) {
    const startIndex = matrix[i].indexOf(word[0]);
    const checkDirection = startIndex >= 0 ? getEnd(i, startIndex) : null;
    if (checkDirection) {
      output.push([i, startIndex], checkDirection);

      break;
    }
  }
  return output;
}

console.log(
  findWord(
    [
      ["h", "i", "s", "h"],
      ["i", "s", "f", "s"],
      ["f", "s", "i", "i"],
      ["s", "h", "i", "f"],
    ],
    "fish"
  )
);
