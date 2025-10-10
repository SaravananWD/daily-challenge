function launchFuel(payload) {
  let totalFuel = 0;
  let additionalFuel = Infinity;

  while (additionalFuel >= 1) {
    const totalMass = payload + totalFuel;
    const requiredFuel = totalMass / 5;
    additionalFuel = requiredFuel - totalFuel;

    if (additionalFuel >= 1) {
      totalFuel = requiredFuel;
    } else {
      totalFuel = Math.round((totalFuel + additionalFuel) * 10) / 10;
    }
  }

  return totalFuel;
}
