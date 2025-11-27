function parseRomanNumeral(numeral) {
  const ROMAN = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let total = 0;
  let prevValue = 0;

  // Process from right to left (simpler logic)
  for (let i = numeral.length - 1; i >= 0; i--) {
    const current = ROMAN[numeral[i]];

    if (current < prevValue) {
      total -= current; // Subtract if smaller numeral before larger
    } else {
      total += current; // Otherwise add
    }

    prevValue = current;
  }

  return total;
}
