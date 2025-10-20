/*
Challenge #26

Date: October 20, 2025
Name: Tip Calculator
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-20
*/

function calculateTips(mealPrice, customTip) {
  const customTipNum = Number(customTip.slice(0, -1));
  const mealPriceNum = Number(mealPrice.slice(1));

  const tipsPerecent = {
    fifteen: Math.round(mealPriceNum * 0.15 * 100) / 100,
    twenty: Math.round(mealPriceNum * 0.2 * 100) / 100,
    custom: Math.round(mealPriceNum * (customTipNum / 100) * 100) / 100,
  };

  return [
    `$${tipsPerecent.fifteen.toFixed(2)}`,
    `$${tipsPerecent.twenty.toFixed(2)}`,
    `$${tipsPerecent.custom.toFixed(2)}`,
  ];
}

console.log(calculateTips("$19.85", "9%"));
