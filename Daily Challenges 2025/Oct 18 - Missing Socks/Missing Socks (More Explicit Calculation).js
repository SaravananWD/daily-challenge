function sockPairs(initialPairs, cycles) {
  const lost = Math.floor(cycles / 2);
  const found = Math.floor(cycles / 3);
  const thrown = Math.floor(cycles / 5);
  const bought = Math.floor(cycles / 10) * 2;

  const totalSocks = initialPairs * 2 - lost + found - thrown + bought;

  return Math.max(0, Math.floor(totalSocks / 2));
}
