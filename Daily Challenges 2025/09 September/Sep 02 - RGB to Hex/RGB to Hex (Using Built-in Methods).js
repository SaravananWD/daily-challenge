function rgbToHex(rgb) {
  // Extract numbers using regex
  const matches = rgb.match(/\d+/g);
  if (!matches || matches.length !== 3) {
    throw new Error("Invalid RGB format");
  }

  const [r, g, b] = matches.map(Number);

  // Validate range
  if ([r, g, b].some((val) => val < 0 || val > 255)) {
    throw new Error("RGB values must be between 0 and 255");
  }

  // Convert to hex with padding
  const toHex = (num) => num.toString(16).padStart(2, "0");

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toLowerCase();
}
