function sym(...arrays) {
  const getDiff = (a, b) => [
    ...a.filter((x) => !b.includes(x)),
    ...b.filter((x) => !a.includes(x)),
  ];

  // Remove duplicates from each array first
  const uniqueArrays = arrays.map((arr) => [...new Set(arr)]);

  return uniqueArrays.reduce(getDiff, []);
}
