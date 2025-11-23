function scaleRecipe(ingredients, scale) {
  return ingredients.map((recipe) => {
    const parts = recipe.split(" ");
    const quantity = parseFloat(parts[0]);

    if (isNaN(quantity)) return recipe;

    // Use toFixed to avoid floating point errors, then clean up
    const scaledQuantity = quantity * scale;
    const formatted = scaledQuantity
      .toFixed(10) // Handle up to 10 decimal places
      .replace(/(\.\d*?[1-9])0+$|\.0+$/, "$1"); // Remove trailing zeros

    return [formatted, ...parts.slice(1)].join(" ");
  });
}
