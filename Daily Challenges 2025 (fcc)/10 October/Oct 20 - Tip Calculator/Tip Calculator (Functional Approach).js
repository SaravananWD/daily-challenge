function calculateTips(mealPrice, customTip) {
  const price = parseFloat(mealPrice.replace("$", ""));
  const customPercent = parseFloat(customTip.replace("%", "")) / 100;

  const calculateTip = (percent) =>
    `$${(Math.round(price * percent * 100) / 100).toFixed(2)}`;

  return [calculateTip(0.15), calculateTip(0.2), calculateTip(customPercent)];
}
