function calculateTips(mealPrice, customTip) {
  const price = Number(mealPrice.substring(1));
  const customPercent = Number(customTip.slice(0, -1)) / 100;

  const formatCurrency = (amount) => `$${amount.toFixed(2)}`;

  return [
    formatCurrency(price * 0.15),
    formatCurrency(price * 0.2),
    formatCurrency(price * customPercent),
  ].map((amt) => formatCurrency(parseFloat(amt.slice(1)))); // Re-format to ensure 2 decimals
}
