function getFinalOpenedDoors(numDoors) {
  const openDoors = [];
  let door = 1;

  while (door * door <= numDoors) {
    openDoors.push(door * door);
    door++;
  }

  return openDoors;
}
