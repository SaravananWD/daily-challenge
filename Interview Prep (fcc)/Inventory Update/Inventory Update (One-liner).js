const updateInventory = (arr1, arr2) =>
  Object.entries(
    [...arr1, ...arr2].reduce(
      (acc, [q, i]) => ({ ...acc, [i]: (acc[i] || 0) + q }),
      {}
    )
  )
    .map(([i, q]) => [q, i])
    .sort((a, b) => a[1].localeCompare(b[1]));
