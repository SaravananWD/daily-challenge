function isValidIPv4(ipv4) {
  const parts = ipv4.split(".");
  if (parts.length !== 4) return false;

  for (const part of parts) {
    // Check if part contains only digits
    if (!/^\d+$/.test(part)) return false;

    // Convert to number and check range
    const num = parseInt(part, 10);
    if (num < 0 || num > 255) return false;

    // Check for leading zeros
    if (part.length > 1 && part[0] === "0") return false;

    // Check for empty part
    if (part.length === 0) return false;
  }

  return true;
}
