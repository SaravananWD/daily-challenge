function isValidIPv4(ipv4) {
  // Basic structure check
  const parts = ipv4.split(".");
  if (parts.length !== 4) return false;

  for (const part of parts) {
    if (!isValidIPv4Part(part)) {
      return false;
    }
  }

  return true;
}

function isValidIPv4Part(part) {
  // Check empty
  if (part.length === 0) return false;

  // Check only digits
  if (!/^\d+$/.test(part)) return false;

  // Check no leading zeros (unless it's just "0")
  if (part.length > 1 && part[0] === "0") return false;

  // Check numeric range
  const num = parseInt(part, 10);
  return num >= 0 && num <= 255;
}
