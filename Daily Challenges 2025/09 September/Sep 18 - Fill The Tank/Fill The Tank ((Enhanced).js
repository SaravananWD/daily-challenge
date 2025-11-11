function costToFill(tankSize, fuelLevel, pricePerGallon) {
  const gallonsNeeded = tankSize - fuelLevel;
  const totalCost = gallonsNeeded * pricePerGallon;
  return `$${totalCost.toFixed(2)}`;
}
