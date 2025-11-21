function lcm(a, b) {
  // Handle non-positive integers
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error("Inputs must be integers");
  }

  if (a === 0 || b === 0) return 0;

  // Use absolute values for mathematical correctness
  const absA = Math.abs(a);
  const absB = Math.abs(b);

  return (absA / gcd(absA, absB)) * absB;
}
