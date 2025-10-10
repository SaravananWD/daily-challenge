function launchFuel(payload) {
  let totalFuel = 0;
  let additionalFuel = Infinity;

  while (additionalFuel >= 1) {
    const previousFuel = totalFuel;
    const totalMass = payload + totalFuel;
    totalFuel = totalMass / 5;
    additionalFuel = totalFuel - previousFuel;
  }

  return Math.round(totalFuel * 10) / 10;
}
