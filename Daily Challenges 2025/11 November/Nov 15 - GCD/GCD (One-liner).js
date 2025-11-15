const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));
