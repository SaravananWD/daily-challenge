function nthPrime(n) {
  if (n === 1) return 2;

  const isPrime = (num) => {
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };

  let count = 1; // Start with 2 already counted
  let candidate = 1;

  while (count < n) {
    candidate += 2; // Check only odd numbers after 2
    if (isPrime(candidate)) {
      count++;
    }
  }

  return candidate;
}
