/*
Challenge #30

Date: October 24, 2025
Name: Hidden Treasure
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-24
*/

function dive(map, coordinates) {
  const element = map[coordinates[0]][coordinates[1]];
  if (element === "-") return "Empty";

  let pending = false;
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (!(i === coordinates[0] && j === coordinates[1]) && !pending) {
        pending = map[i][j] === "O";
      }
    }
  }

  return pending ? "Found" : "Recovered";
}

console.log(
  dive(
    [
      ["-", "X"],
      ["-", "X"],
      ["-", "O"],
    ],
    [2, 1]
  )
);
