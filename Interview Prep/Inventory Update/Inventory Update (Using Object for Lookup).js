function updateInventory(arr1, arr2) {
  const inventory = {};

  // Populate with current inventory
  for (const [quantity, item] of arr1) {
    inventory[item] = quantity;
  }

  // Update with new items
  for (const [quantity, item] of arr2) {
    inventory[item] = (inventory[item] || 0) + quantity;
  }

  // Convert to array and sort
  return Object.entries(inventory)
    .map(([item, quantity]) => [quantity, item])
    .sort((a, b) => a[1].localeCompare(b[1]));
}
