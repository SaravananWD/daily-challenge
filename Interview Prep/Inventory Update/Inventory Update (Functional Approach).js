function updateInventory(arr1, arr2) {
  const combined = [...arr1, ...arr2];
  const merged = combined.reduce((acc, [quantity, item]) => {
    acc[item] = (acc[item] || 0) + quantity;
    return acc;
  }, {});

  return Object.entries(merged)
    .map(([item, quantity]) => [quantity, item])
    .sort((a, b) => a[1].localeCompare(b[1]));
}
