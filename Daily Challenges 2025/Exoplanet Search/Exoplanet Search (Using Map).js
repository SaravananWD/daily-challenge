function hasExoplanet(readings) {
  const charToValue = new Map();

  // Add digits 0-9
  for (let i = 0; i <= 9; i++) {
    charToValue.set(String(i), i);
  }

  // Add letters A-Z (10-35)
  for (let i = 0; i < 26; i++) {
    charToValue.set(String.fromCharCode(65 + i), i + 10); // A-Z
  }

  const values = Array.from(readings.toUpperCase(), (char) => {
    if (!charToValue.has(char)) {
      throw new Error(`Invalid character: ${char}`);
    }
    return charToValue.get(char);
  });

  const average = values.reduce((a, b) => a + b) / values.length;
  return values.some((value) => value <= average * 0.8);
}
