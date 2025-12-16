function findWord(matrix, word) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const len = word.length;

  const checkRight = (row, col) => {
    if (col + len > cols) return null;
    for (let i = 0; i < len; i++) {
      if (matrix[row][col + i] !== word[i]) return null;
    }
    return [
      [row, col],
      [row, col + len - 1],
    ];
  };

  const checkLeft = (row, col) => {
    if (col - len + 1 < 0) return null;
    for (let i = 0; i < len; i++) {
      if (matrix[row][col - i] !== word[i]) return null;
    }
    return [
      [row, col],
      [row, col - len + 1],
    ];
  };

  const checkDown = (row, col) => {
    if (row + len > rows) return null;
    for (let i = 0; i < len; i++) {
      if (matrix[row + i][col] !== word[i]) return null;
    }
    return [
      [row, col],
      [row + len - 1, col],
    ];
  };

  const checkUp = (row, col) => {
    if (row - len + 1 < 0) return null;
    for (let i = 0; i < len; i++) {
      if (matrix[row - i][col] !== word[i]) return null;
    }
    return [
      [row, col],
      [row - len + 1, col],
    ];
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col] === word[0]) {
        const result =
          checkRight(row, col) ||
          checkLeft(row, col) ||
          checkDown(row, col) ||
          checkUp(row, col);
        if (result) return result;
      }
    }
  }

  return null;
}
