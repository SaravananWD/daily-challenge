function scaleRecipe(ingredients, scale) {
  return ingredients.map((recipe) => {
    const parts = recipe.split(" ");
    const quantity = parseFloat(parts[0]);

    // Handle invalid quantities
    if (isNaN(quantity)) return recipe;

    const scaledQuantity = quantity * scale;
    const formattedQuantity = formatQuantity(scaledQuantity);

    return [formattedQuantity, ...parts.slice(1)].join(" ");
  });
}

// Helper function to format numbers without trailing zeros
function formatQuantity(num) {
  // Handle whole numbers
  if (num % 1 === 0) return num.toString();

  // Handle decimals - remove trailing zeros
  return num.toString().replace(/(\.\d*?[1-9])0+$|\.0+$/, "$1");
}
