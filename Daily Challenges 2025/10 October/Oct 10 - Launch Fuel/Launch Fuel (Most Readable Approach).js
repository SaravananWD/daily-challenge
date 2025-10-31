function launchFuel(payload) {
  let totalFuel = 0;
  let iteration = 0;

  while (true) {
    const totalMass = payload + totalFuel;
    const requiredFuel = totalMass / 5;
    const additionalFuel = requiredFuel - totalFuel;

    if (additionalFuel < 1) {
      // Final iteration with the small additional amount
      totalFuel += additionalFuel;
      break;
    }

    totalFuel = requiredFuel;
    iteration++;

    // Safety check to prevent infinite loops
    if (iteration > 100) break;
  }

  return Math.round(totalFuel * 10) / 10;
}
