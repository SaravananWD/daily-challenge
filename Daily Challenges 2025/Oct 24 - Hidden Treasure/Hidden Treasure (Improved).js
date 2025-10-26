function dive(map, coordinates) {
  const [row, col] = coordinates;

  // Check what's at dive location
  if (map[row][col] === "-") {
    return "Empty";
  }

  // Mark the found treasure at dive location
  if (map[row][col] === "O") {
    map[row][col] = "X";
  }

  // Check if any "O" remains anywhere on the map
  let remainingTreasure = false;
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === "O") {
        remainingTreasure = true;
        break;
      }
    }
    if (remainingTreasure) break;
  }

  return remainingTreasure ? "Found" : "Recovered";
}
