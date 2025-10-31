function spookify(boo) {
  const withTildes = boo.replace(/[_-]/g, "~");
  let result = "";
  let letterCount = 0;

  for (const char of withTildes) {
    if (char === "~") {
      result += "~";
    } else {
      result += letterCount % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
      letterCount++;
    }
  }

  return result;
}
