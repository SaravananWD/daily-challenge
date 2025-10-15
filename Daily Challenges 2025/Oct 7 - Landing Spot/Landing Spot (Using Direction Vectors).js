function findLandingSpot(matrix) {
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]; // top, bottom, left, right
  let safest = { indices: [], danger: Infinity };

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        const danger = directions.reduce((sum, [di, dj]) => {
          const ni = i + di,
            nj = j + dj;
          return ni >= 0 &&
            ni < matrix.length &&
            nj >= 0 &&
            nj < matrix[i].length
            ? sum + matrix[ni][nj]
            : sum;
        }, 0);

        if (danger < safest.danger) {
          safest = { indices: [i, j], danger };
        }
      }
    }
  }

  return safest.indices;
}
