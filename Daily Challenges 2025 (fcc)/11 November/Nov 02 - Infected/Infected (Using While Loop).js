function infected(days) {
  let infected = 1;
  let day = 0;

  while (day < days) {
    day++;
    infected *= 2; // Virus spreads

    if (day % 3 === 0) {
      infected -= Math.ceil(infected * 0.2); // Apply patch
    }
  }

  return infected;
}
