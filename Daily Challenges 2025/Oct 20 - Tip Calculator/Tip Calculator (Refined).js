function calculateTips(mealPrice, customTip) {
  const mealPriceNum = parseFloat(mealPrice.slice(1));
  const customTipPercent = parseFloat(customTip.slice(0, -1));

  const tips = {
    fifteen: Math.round(mealPriceNum * 0.15 * 100) / 100,
    twenty: Math.round(mealPriceNum * 0.2 * 100) / 100,
    custom: Math.round(mealPriceNum * (customTipPercent / 100) * 100) / 100,
  };

  return [
    `$${tips.fifteen.toFixed(2)}`,
    `$${tips.twenty.toFixed(2)}`,
    `$${tips.custom.toFixed(2)}`,
  ];
}
