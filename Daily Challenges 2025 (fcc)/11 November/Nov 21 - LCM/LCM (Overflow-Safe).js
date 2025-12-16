function lcm(a, b) {
  if (a === 0 || b === 0) return 0;

  // Avoid potential overflow by dividing first
  return Math.abs((a / gcd(a, b)) * b);
}
