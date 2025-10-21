/*
Challenge #27

Date: October 21, 2025
Name: Thermostat Adjuster 2
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-21
*/

function adjustThermostat(currentF, targetC) {
  const targetF = targetC * 1.8 + 32;

  const difference = Math.round((currentF - targetF) * 10) / 10;

  if (difference > 0) {
    return `Cool: ${difference.toFixed(1)} degrees Fahrenheit`;
  } else if (difference < 0) {
    return `Heat: ${Math.abs(difference).toFixed(1)} degrees Fahrenheit`;
  } else if (difference === 0) {
    return "Hold";
  }
}

console.log(adjustThermostat(32, 0)); // Hold
