function combinations(cards) {
  const TOTAL_CARDS = 52;
  const memo = new Map();

  const comb = (n, k) => {
    if (k === 0 || k === n) return 1;
    if (k === 1 || k === n - 1) return n;

    const key = `${n},${k}`;
    if (memo.has(key)) return memo.get(key);

    // Use Pascal's identity: C(n,k) = C(n-1,k-1) + C(n-1,k)
    const result = comb(n - 1, k - 1) + comb(n - 1, k);
    memo.set(key, result);
    return result;
  };

  return comb(TOTAL_CARDS, cards);
}
