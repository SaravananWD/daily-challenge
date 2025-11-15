function updateInventory(arr1, arr2) {
  const inventoryMap = new Map();

  // Convert current inventory to Map for O(1) lookups
  for (const [quantity, item] of arr1) {
    inventoryMap.set(item, quantity);
  }

  // Update with new delivery
  for (const [quantity, item] of arr2) {
    if (inventoryMap.has(item)) {
      inventoryMap.set(item, inventoryMap.get(item) + quantity);
    } else {
      inventoryMap.set(item, quantity);
    }
  }

  // Convert back to array and sort
  return Array.from(inventoryMap.entries())
    .map(([item, quantity]) => [quantity, item])
    .sort((a, b) => a[1].localeCompare(b[1]));
}
