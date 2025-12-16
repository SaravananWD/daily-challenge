function gcd(x, y) {
  let a = Math.max(x, y);
  let b = Math.min(x, y);

  while (b !== 0) {
    let remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
}
