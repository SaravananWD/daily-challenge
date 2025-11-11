const costToFill = (tankSize, fuelLevel, pricePerGallon) =>
  `$${((tankSize - fuelLevel) * pricePerGallon).toFixed(2)}`;
