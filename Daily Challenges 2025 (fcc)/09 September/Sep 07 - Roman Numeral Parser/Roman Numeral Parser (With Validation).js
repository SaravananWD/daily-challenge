function parseRomanNumeral(numeral) {
  if (typeof numeral !== "string") {
    throw new Error("Input must be a string");
  }

  const ROMAN = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  // Validate all characters are valid Roman numerals
  if (!numeral.split("").every((char) => ROMAN.hasOwnProperty(char))) {
    throw new Error("Invalid Roman numeral characters");
  }

  let total = 0;
  let prevValue = 0;

  for (let i = numeral.length - 1; i >= 0; i--) {
    const current = ROMAN[numeral[i]];

    if (current < prevValue) {
      total -= current;
    } else {
      total += current;
    }

    prevValue = current;
  }

  return total;
}
