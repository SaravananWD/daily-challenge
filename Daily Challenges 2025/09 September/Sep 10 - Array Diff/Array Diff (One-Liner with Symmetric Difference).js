function arrayDiff(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  return [
    ...arr1.filter((x) => !set2.has(x)),
    ...arr2.filter((x) => !set1.has(x)),
  ].sort();
}
