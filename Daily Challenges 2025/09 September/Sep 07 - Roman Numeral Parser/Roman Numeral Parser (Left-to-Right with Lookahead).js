function parseRomanNumeral(numeral) {
  const ROMAN = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let total = 0;

  for (let i = 0; i < numeral.length; i++) {
    const current = ROMAN[numeral[i]];
    const next = ROMAN[numeral[i + 1]];

    if (next > current) {
      total -= current; // Subtract if next numeral is larger
    } else {
      total += current; // Otherwise add
    }
  }

  return total;
}
