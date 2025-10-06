function hasExoplanet(readings) {
  if (!/^[0-9A-Z]+$/i.test(readings)) {
    throw new Error("Invalid input characters");
  }

  const values = Array.from(readings.toUpperCase(), (char) => {
    const code = char.charCodeAt(0);
    return code <= 57 ? code - 48 : code - 55; // '0'-'9' -> 0-9, 'A'-'Z' -> 10-35
  });

  const average = values.reduce((a, b) => a + b) / values.length;
  return values.some((value) => value <= average * 0.8);
}
