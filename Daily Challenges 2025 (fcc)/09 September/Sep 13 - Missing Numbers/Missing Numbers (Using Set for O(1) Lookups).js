function findMissingNumbers(arr) {
  if (arr.length === 0) return [];

  const numSet = new Set(arr);
  const max = Math.max(...arr);
  const missing = [];

  for (let i = 1; i <= max; i++) {
    if (!numSet.has(i)) {
      missing.push(i);
    }
  }

  return missing;
}
