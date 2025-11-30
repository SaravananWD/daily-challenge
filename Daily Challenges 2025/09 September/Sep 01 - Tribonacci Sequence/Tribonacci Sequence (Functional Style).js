function tribonacciSequence(startSequence, length) {
  if (length === 0) return [];
  if (length <= 3) return startSequence.slice(0, length);

  return Array.from({ length }, (_, i) =>
    i < 3 ? startSequence[i] : undefined
  ).map((val, i, arr) =>
    val !== undefined ? val : arr[i - 1] + arr[i - 2] + arr[i - 3]
  );
}
