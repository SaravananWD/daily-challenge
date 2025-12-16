function arrayDiff(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const diff = [];

  // Find elements in arr1 but not in arr2
  for (const item of set1) {
    if (!set2.has(item)) {
      diff.push(item);
    }
  }

  // Find elements in arr2 but not in arr1
  for (const item of set2) {
    if (!set1.has(item)) {
      diff.push(item);
    }
  }

  return diff.sort();
}
