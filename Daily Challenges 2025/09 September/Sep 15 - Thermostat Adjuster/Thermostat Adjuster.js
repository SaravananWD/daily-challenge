/*
Challenge #75

Date: September 15, 2025
Name: Thermostat Adjuster
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-15
*/

function adjustThermostat(temp, target) {
  const conditions = {
    heat: temp < target,
    cool: temp > target,
    hold: temp === target,
  };

  return Object.keys(conditions).filter((c) => conditions[c])[0];
}

console.log(adjustThermostat(75, 72));
