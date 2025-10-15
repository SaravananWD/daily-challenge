function findLandingSpot(matrix) {
  let safestIndices = [];
  let minDangerLevel = Infinity;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        let dangerLevel = 0;

        // Check all four neighbors
        if (i > 0) dangerLevel += matrix[i - 1][j]; // top
        if (i < matrix.length - 1) dangerLevel += matrix[i + 1][j]; // bottom
        if (j > 0) dangerLevel += matrix[i][j - 1]; // left
        if (j < matrix[i].length - 1) dangerLevel += matrix[i][j + 1]; // right

        // Update safest spot in real-time (no need to store all findings)
        if (dangerLevel < minDangerLevel) {
          minDangerLevel = dangerLevel;
          safestIndices = [i, j];
        }
      }
    }
  }

  return safestIndices;
}
