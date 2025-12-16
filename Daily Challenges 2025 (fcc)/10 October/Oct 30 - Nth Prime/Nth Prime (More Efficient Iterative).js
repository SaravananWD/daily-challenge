function nthPrime(n) {
  const primes = [2];
  let candidate = 3;

  while (primes.length < n) {
    let isPrime = true;
    const sqrt = Math.sqrt(candidate);

    for (const prime of primes) {
      if (prime > sqrt) break;
      if (candidate % prime === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) primes.push(candidate);
    candidate += 2;
  }

  return primes[n - 1];
}
