function hexToDecimal(hex) {
  const HEX_VALUES = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15, // Handle lowercase
  };

  const digits = hex.toUpperCase().split("");

  return digits
    .map((digit, index) => {
      const value = HEX_VALUES[digit];
      if (value === undefined) {
        throw new Error(`Invalid hexadecimal digit: ${digit}`);
      }
      const power = digits.length - 1 - index;
      return value * Math.pow(16, power);
    })
    .reduce((sum, num) => sum + num, 0);
}
