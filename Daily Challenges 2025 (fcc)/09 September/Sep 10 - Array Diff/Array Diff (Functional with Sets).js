function arrayDiff(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const uniqueToFirst = [...set1].filter((item) => !set2.has(item));
  const uniqueToSecond = [...set2].filter((item) => !set1.has(item));

  return [...uniqueToFirst, ...uniqueToSecond].sort();
}
