function findLandingSpot(matrix) {
  const safeSpots = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        const dangerLevel = [
          [i - 1, j],
          [i + 1, j],
          [i, j - 1],
          [i, j + 1], // neighbors coordinates
        ].reduce(
          (sum, [ni, nj]) =>
            ni >= 0 && ni < matrix.length && nj >= 0 && nj < matrix[i].length
              ? sum + matrix[ni][nj]
              : sum,
          0
        );

        safeSpots.push({ indices: [i, j], dangerLevel });
      }
    }
  }

  return safeSpots.reduce((safest, current) =>
    current.dangerLevel < safest.dangerLevel ? current : safest
  ).indices;
}
