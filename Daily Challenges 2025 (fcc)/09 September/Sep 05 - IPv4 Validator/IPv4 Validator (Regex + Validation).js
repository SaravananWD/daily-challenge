function isValidIPv4(ipv4) {
  const parts = ipv4.split(".");
  if (parts.length !== 4) return false;

  for (const part of parts) {
    // Validate format: no leading zeros, only digits, proper range
    if (!/^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)$/.test(part)) {
      return false;
    }
  }

  return true;
}
