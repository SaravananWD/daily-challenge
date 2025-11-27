function findMissingNumbers(arr) {
  if (arr.length === 0) return [];

  const max = Math.max(...arr);
  const present = new Array(max + 1).fill(false);

  // Mark present numbers
  for (const num of arr) {
    if (num >= 1 && num <= max) {
      present[num] = true;
    }
  }

  // Collect missing numbers
  const missing = [];
  for (let i = 1; i <= max; i++) {
    if (!present[i]) {
      missing.push(i);
    }
  }

  return missing;
}
