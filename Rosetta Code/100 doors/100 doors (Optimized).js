function getFinalOpenedDoors(numDoors) {
  const doors = Array(numDoors + 1).fill(false);

  for (let visitCount = 1; visitCount <= numDoors; visitCount++) {
    for (let doorNum = visitCount; doorNum <= numDoors; doorNum += visitCount) {
      doors[doorNum] = !doors[doorNum];
    }
  }

  return doors
    .map((isOpen, index) => (isOpen ? index : null))
    .filter((index) => index !== null && index > 0);
}
