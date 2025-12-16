function nthPrime(n) {
  if (n === 1) return 2;

  // Estimate upper bound using prime number theorem
  const limit = Math.ceil(n * Math.log(n) + n * Math.log(Math.log(n)));
  const sieve = new Array(limit + 1).fill(true);
  sieve[0] = sieve[1] = false;

  let count = 0;
  for (let i = 2; i <= limit; i++) {
    if (sieve[i]) {
      count++;
      if (count === n) return i;
      for (let j = i * i; j <= limit; j += i) {
        sieve[j] = false;
      }
    }
  }

  return -1; // Should not reach here with proper limit
}
