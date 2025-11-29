function getNextLocation(matrix) {
  // Find positions 1 and 2
  let pos1 = null,
    pos2 = null;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) pos1 = [i, j];
      if (matrix[i][j] === 2) pos2 = [i, j];
      if (pos1 && pos2) break;
    }
    if (pos1 && pos2) break;
  }

  if (!pos1 || !pos2) return null;

  // Calculate movement vector from 1→2
  const rowDir = pos2[0] - pos1[0];
  const colDir = pos2[1] - pos1[1];

  // Calculate next position
  let nextRow = pos2[0] + rowDir;
  let nextCol = pos2[1] + colDir;

  // Handle boundary bouncing
  let finalRow = nextRow;
  let finalCol = nextCol;

  // Vertical bounce (top/bottom walls)
  if (nextRow < 0 || nextRow >= matrix.length) {
    finalRow = nextRow < 0 ? 0 : matrix.length - 1;
    // Reverse vertical direction for next calculation
    finalRow = pos2[0] + (nextRow < 0 ? 1 : -1);
  }

  // Horizontal bounce (left/right walls)
  if (nextCol < 0 || nextCol >= matrix[0].length) {
    finalCol = nextCol < 0 ? 0 : matrix[0].length - 1;
    // Reverse horizontal direction for next calculation
    finalCol = pos2[1] + (nextCol < 0 ? 1 : -1);
  }

  return [finalRow, finalCol];
}
