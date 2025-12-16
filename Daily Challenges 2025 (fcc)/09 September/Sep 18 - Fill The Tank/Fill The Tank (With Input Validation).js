function costToFill(tankSize, fuelLevel, pricePerGallon) {
  if (tankSize <= 0 || fuelLevel < 0 || pricePerGallon < 0) {
    throw new Error("All values must be positive numbers");
  }

  if (fuelLevel > tankSize) {
    throw new Error("Fuel level cannot exceed tank size");
  }

  const gallonsNeeded = tankSize - fuelLevel;
  const totalCost = gallonsNeeded * pricePerGallon;
  return `$${totalCost.toFixed(2)}`;
}
