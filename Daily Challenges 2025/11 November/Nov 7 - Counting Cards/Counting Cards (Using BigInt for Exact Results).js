function combinations(cards) {
  const TOTAL_CARDS = 52n;

  const factorial = (n) => {
    let result = 1n;
    for (let i = 2n; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  const n = TOTAL_CARDS;
  const k = BigInt(cards);

  return Number(factorial(n) / (factorial(k) * factorial(n - k)));
}
