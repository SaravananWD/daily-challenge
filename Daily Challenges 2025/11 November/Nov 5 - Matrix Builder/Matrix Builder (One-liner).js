function buildMatrix(rows, cols) {
  return Array(rows)
    .fill()
    .map(() => Array(cols).fill(0));
}
