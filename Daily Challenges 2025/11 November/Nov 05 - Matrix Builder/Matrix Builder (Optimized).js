function buildMatrix(rows, cols) {
  const matrix = [];

  for (let i = 0; i < rows; i++) {
    matrix.push(Array(cols).fill(0));
  }

  return matrix;
}
