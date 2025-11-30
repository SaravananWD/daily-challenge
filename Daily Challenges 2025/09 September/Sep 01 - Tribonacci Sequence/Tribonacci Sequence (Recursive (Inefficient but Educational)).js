function tribonacciSequence(startSequence, length) {
  if (length === 0) return [];
  if (length <= 3) return startSequence.slice(0, length);

  const prev = tribonacciSequence(startSequence, length - 1);
  const n = prev.length;
  return [...prev, prev[n - 1] + prev[n - 2] + prev[n - 3]];
}
