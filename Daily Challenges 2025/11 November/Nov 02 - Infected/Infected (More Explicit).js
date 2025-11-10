function infected(days) {
  let infected = 1;

  for (let day = 1; day <= days; day++) {
    // Virus spreads - double infected count
    infected *= 2;

    // Apply patch on days 3, 6, 9, etc.
    if (day % 3 === 0) {
      const twentyPercent = infected * 0.2;
      const computersPatched = Math.ceil(twentyPercent);
      infected -= computersPatched;
    }
  }

  return infected;
}
