/*
Challenge #55

Challenge Date: September 18, 2025
Name: Fill The Tank
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-18
Completed Date: November 11, 2025
*/

function costToFill(tankSize, fuelLevel, pricePerGallon) {
  const priceNum = (tankSize - fuelLevel) * pricePerGallon;
  return "$" + priceNum.toFixed(2);
}
console.log(costToFill(15, 10, 3.5));
