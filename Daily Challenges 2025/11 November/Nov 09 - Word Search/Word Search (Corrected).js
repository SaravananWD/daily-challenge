function findWord(matrix, word) {
  const directions = [
    [0, 1], // right
    [0, -1], // left
    [1, 0], // down
    [-1, 0], // up
  ];

  const rows = matrix.length;
  const cols = matrix[0].length;
  const wordLength = word.length;

  // Check if a word exists starting at [row, col] in given direction
  const checkDirection = (row, col, dr, dc) => {
    for (let i = 0; i < wordLength; i++) {
      const newRow = row + i * dr;
      const newCol = col + i * dc;

      // Check bounds and character match
      if (
        newRow < 0 ||
        newRow >= rows ||
        newCol < 0 ||
        newCol >= cols ||
        matrix[newRow][newCol] !== word[i]
      ) {
        return null;
      }
    }

    // Return start and end positions
    const endRow = row + (wordLength - 1) * dr;
    const endCol = col + (wordLength - 1) * dc;
    return [
      [row, col],
      [endRow, endCol],
    ];
  };

  // Search through entire matrix
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // Check all directions from this position
      for (const [dr, dc] of directions) {
        const result = checkDirection(row, col, dr, dc);
        if (result) {
          return result;
        }
      }
    }
  }

  return null; // Should not happen per problem constraints
}
