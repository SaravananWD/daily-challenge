function gcd(x, y) {
  // Ensure positive numbers
  let a = Math.abs(x);
  let b = Math.abs(y);

  // Euclidean algorithm
  while (b > 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}
