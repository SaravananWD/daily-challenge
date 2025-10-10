/*
Challenge details

Date: October 10, 2025
Name: Space Week Day 7: Launch Fuel
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-10
*/

function launchFuel(payload) {
  let fuel = 0;

  let additionalFuel = Infinity;
  while (additionalFuel >= 1) {
    const prevFuel = fuel;
    fuel = (payload + prevFuel) / 5;
    additionalFuel = (fuel - prevFuel) / 5; // fuel required for fuel

    if (additionalFuel < 1) {
      fuel = Math.round((fuel + additionalFuel) * 10) / 10;
    }
  }

  return fuel;
}

console.log(launchFuel(500)); // 500 -> 124.8 // 243 -> 60.7 // 50 -> 12.4
