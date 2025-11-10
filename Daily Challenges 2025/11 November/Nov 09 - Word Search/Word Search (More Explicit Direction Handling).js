function findWord(matrix, word) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const len = word.length;

  // Check horizontal right
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col <= cols - len; col++) {
      let match = true;
      for (let i = 0; i < len; i++) {
        if (matrix[row][col + i] !== word[i]) {
          match = false;
          break;
        }
      }
      if (match)
        return [
          [row, col],
          [row, col + len - 1],
        ];
    }
  }

  // Check horizontal left
  for (let row = 0; row < rows; row++) {
    for (let col = len - 1; col < cols; col++) {
      let match = true;
      for (let i = 0; i < len; i++) {
        if (matrix[row][col - i] !== word[i]) {
          match = false;
          break;
        }
      }
      if (match)
        return [
          [row, col],
          [row, col - len + 1],
        ];
    }
  }

  // Check vertical down
  for (let row = 0; row <= rows - len; row++) {
    for (let col = 0; col < cols; col++) {
      let match = true;
      for (let i = 0; i < len; i++) {
        if (matrix[row + i][col] !== word[i]) {
          match = false;
          break;
        }
      }
      if (match)
        return [
          [row, col],
          [row + len - 1, col],
        ];
    }
  }

  // Check vertical up
  for (let row = len - 1; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let match = true;
      for (let i = 0; i < len; i++) {
        if (matrix[row - i][col] !== word[i]) {
          match = false;
          break;
        }
      }
      if (match)
        return [
          [row, col],
          [row - len + 1, col],
        ];
    }
  }

  return null;
}
