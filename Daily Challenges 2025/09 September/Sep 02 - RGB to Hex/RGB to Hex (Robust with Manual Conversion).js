function rgbToHex(rgb) {
  // Parse RGB values
  const matches = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!matches) {
    throw new Error("Invalid RGB format");
  }

  const [_, r, g, b] = matches.map(Number);

  // Validate range
  if ([r, g, b].some((val) => val < 0 || val > 255)) {
    throw new Error("RGB values must be between 0 and 255");
  }

  // Convert using manual approach (fixed)
  const toHex = (num) => {
    if (num === 0) return "00";

    const hexDigits = "0123456789abcdef";
    let result = "";

    while (num > 0) {
      result = hexDigits[num % 16] + result;
      num = Math.floor(num / 16);
    }

    return result.padStart(2, "0");
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
