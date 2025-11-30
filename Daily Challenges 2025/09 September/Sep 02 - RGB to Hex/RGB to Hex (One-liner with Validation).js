function rgbToHex(rgb) {
  const matches = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!matches) throw new Error("Invalid RGB format");

  const hex = matches
    .slice(1)
    .map((val) => {
      const num = Number(val);
      if (num < 0 || num > 255) throw new Error("Value out of range");
      return num.toString(16).padStart(2, "0");
    })
    .join("");

  return `#${hex}`;
}
