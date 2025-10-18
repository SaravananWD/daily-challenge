const sockPairs = (pairs, cycles) =>
  Math.max(
    0,
    Math.floor(
      (pairs * 2 -
        Math.floor(cycles / 2) +
        Math.floor(cycles / 3) -
        Math.floor(cycles / 5) +
        Math.floor(cycles / 10) * 2) /
        2
    )
  );
