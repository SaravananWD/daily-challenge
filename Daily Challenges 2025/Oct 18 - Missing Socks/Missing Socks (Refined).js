function sockPairs(initialPairs, cycles) {
  const CYCLE_RULES = {
    LOSE: 2,
    FIND: 3,
    THROW: 5,
    BUY: 10,
  };

  let totalSocks = initialPairs * 2;

  // Apply all cycle effects
  totalSocks -= Math.floor(cycles / CYCLE_RULES.LOSE); // Lose socks
  totalSocks += Math.floor(cycles / CYCLE_RULES.FIND); // Find socks
  totalSocks -= Math.floor(cycles / CYCLE_RULES.THROW); // Throw away socks
  totalSocks += Math.floor(cycles / CYCLE_RULES.BUY) * 2; // Buy pairs

  // Ensure non-negative and return complete pairs
  return Math.max(0, Math.floor(totalSocks / 2));
}
