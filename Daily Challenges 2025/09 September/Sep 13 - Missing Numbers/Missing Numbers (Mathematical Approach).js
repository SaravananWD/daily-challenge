function findMissingNumbers(arr) {
  if (arr.length === 0) return [];

  const sorted = [...new Set(arr)].sort((a, b) => a - b);
  const max = sorted[sorted.length - 1];
  const missing = [];

  let expected = 1;
  for (const num of sorted) {
    while (expected < num) {
      missing.push(expected);
      expected++;
    }
    expected = num + 1;
  }

  // Check numbers after the last element
  while (expected <= max) {
    missing.push(expected);
    expected++;
  }

  return missing;
}
