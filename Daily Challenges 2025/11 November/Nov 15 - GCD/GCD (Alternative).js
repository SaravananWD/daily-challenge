function gcdIterative(x, y) {
  // Start from the smaller number and go down to 1
  let limit = Math.min(x, y);

  for (let i = limit; i > 0; i--) {
    // Return immediately on the first match (the "Greatest")
    if (x % i === 0 && y % i === 0) {
      return i;
    }
  }
  return 1; // Fallback
}
