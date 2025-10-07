function findLandingSpot(matrix) {
  const FINDINGS = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        const rowN = i;
        const colN = j;
        const neighbors = {
          left: colN - 1 >= 0 ? matrix[rowN][colN - 1] : 0,
          right:
            colN + 1 <= matrix[rowN].length - 1 ? matrix[rowN][colN + 1] : 0,
          top: rowN - 1 >= 0 ? matrix[rowN - 1][colN] : 0,
          bottom: rowN + 1 <= matrix.length - 1 ? matrix[rowN + 1][colN] : 0,
        };

        FINDINGS.push({
          indices: [rowN, colN],
          dangerLevel:
            neighbors.left + neighbors.right + neighbors.top + neighbors.bottom,
        });
      }
    }
  }

  const safestSpot = FINDINGS.reduce(
    (acc, item) => {
      if (item.dangerLevel < acc.dangerLevel) {
        acc.dangerLevel = item.dangerLevel;
        acc.indices = [...item.indices];
      }
      return acc;
    },
    { indices: [], dangerLevel: Infinity }
  );

  return safestSpot.indices;
}

console.log(
  findLandingSpot([
    [9, 6, 0, 8],
    [7, 1, 1, 0],
    [3, 0, 3, 9],
    [8, 6, 0, 9],
  ])
);
