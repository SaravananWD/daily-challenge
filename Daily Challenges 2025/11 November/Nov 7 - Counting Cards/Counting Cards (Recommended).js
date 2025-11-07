function combinations(cards) {
  const TOTAL_CARDS = 52;

  if (cards < 0 || cards > TOTAL_CARDS) return 0;
  if (cards === 0 || cards === TOTAL_CARDS) return 1;

  // Use smaller of k and n-k for efficiency
  const k = Math.min(cards, TOTAL_CARDS - cards);
  let result = 1;

  for (let i = 0; i < k; i++) {
    result = (result * (TOTAL_CARDS - i)) / (i + 1);
  }

  return Math.round(result);
}
