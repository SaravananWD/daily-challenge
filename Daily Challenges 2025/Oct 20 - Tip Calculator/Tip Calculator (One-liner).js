function calculateTips(mealPrice, customTip) {
  const price = parseFloat(mealPrice.slice(1));
  const customPercent = parseFloat(customTip.slice(0, -1)) / 100;

  return [0.15, 0.2, customPercent].map(
    (percent) => `$${(Math.round(price * percent * 100) / 100).toFixed(2)}`
  );
}
