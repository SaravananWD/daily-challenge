function getFinalOpenedDoors(numDoors) {
  const doors = new Array(numDoors + 1).fill(false);

  for (let pass = 1; pass <= numDoors; pass++) {
    for (let door = pass; door <= numDoors; door += pass) {
      doors[door] = !doors[door];
    }
  }

  const result = [];
  for (let i = 1; i <= numDoors; i++) {
    if (doors[i]) result.push(i);
  }

  return result;
}
