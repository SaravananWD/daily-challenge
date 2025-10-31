function dive(map, coordinates) {
  const [row, col] = coordinates;

  if (map[row][col] === "-") return "Empty";

  // Mark treasure as found if it's "O"
  if (map[row][col] === "O") {
    map[row][col] = "X";
  }

  // Check if any "O" remains in the entire map
  const hasRemainingTreasure = map.some((row) =>
    row.some((cell) => cell === "O")
  );

  return hasRemainingTreasure ? "Found" : "Recovered";
}
