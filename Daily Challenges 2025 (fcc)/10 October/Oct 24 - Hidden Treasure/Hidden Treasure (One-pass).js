function dive(map, coordinates) {
  const [row, col] = coordinates;
  const cell = map[row][col];

  if (cell === "-") return "Empty";

  let remainingTreasure = false;

  // Single pass to check remaining treasure and update current cell
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (i === row && j === col) {
        // Current dive location - mark as found if it's "O"
        if (map[i][j] === "O") {
          map[i][j] = "X";
        }
      } else if (map[i][j] === "O") {
        remainingTreasure = true;
      }
    }
  }

  return remainingTreasure ? "Found" : "Recovered";
}
