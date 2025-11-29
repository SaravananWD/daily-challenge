function getNextLocation(matrix) {
  // Find positions 1 and 2
  const positions = {};
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) positions[1] = [i, j];
      if (matrix[i][j] === 2) positions[2] = [i, j];
    }
  }

  const [r1, c1] = positions[1];
  const [r2, c2] = positions[2];

  // Movement direction
  const dr = r2 - r1;
  const dc = c2 - c1;

  // Calculate next position
  let r3 = r2 + dr;
  let c3 = c2 + dc;

  // Apply bouncing
  if (r3 < 0 || r3 >= matrix.length) {
    r3 = r2 - dr; // Reverse vertical
  }
  if (c3 < 0 || c3 >= matrix[0].length) {
    c3 = c2 - dc; // Reverse horizontal
  }

  return [r3, c3];
}
