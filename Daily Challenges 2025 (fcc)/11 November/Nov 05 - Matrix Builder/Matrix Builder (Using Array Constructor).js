function buildMatrix(rows, cols) {
  return [...Array(rows)].map(() => Array(cols).fill(0));
}
