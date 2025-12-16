function scaleRecipe(ingredients, scale) {
  return ingredients.map((recipe) => {
    // Use regex to properly capture quantity and the rest
    const match = recipe.match(/^([\d.]+)\s+(.+)$/);
    if (!match) return recipe;

    const quantity = parseFloat(match[1]);
    const rest = match[2];

    if (isNaN(quantity)) return recipe;

    const scaledQuantity = quantity * scale;
    const formatted = formatNumber(scaledQuantity);

    return `${formatted} ${rest}`;
  });
}

function formatNumber(num) {
  // Convert to string and remove unnecessary decimal parts
  let str = num.toString();

  // If it has a decimal point, remove trailing zeros
  if (str.includes(".")) {
    str = str.replace(/\.?0+$/, "");
  }

  // Handle case where we removed everything after decimal
  if (str.endsWith(".")) {
    str = str.slice(0, -1);
  }

  return str;
}
