function countRectanglesBruteForce(width, height) {
  let count = 0;

  for (let rectWidth = 1; rectWidth <= width; rectWidth++) {
    for (let rectHeight = 1; rectHeight <= height; rectHeight++) {
      // For each rectangle size, count possible positions
      const horizontalPositions = width - rectWidth + 1;
      const verticalPositions = height - rectHeight + 1;
      count += horizontalPositions * verticalPositions;
    }
  }

  return count;
}
