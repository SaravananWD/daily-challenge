/*
Challenge details

Date: October 8, 2025
Name: Space Week Day 5: Goldilocks Zone
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-08
*/

function goldilocksZone(mass) {
  const luminosity = Math.pow(mass, 3.5); // or mass ** 3.5;

  const squareRoot = Math.sqrt(luminosity);

  let startZone = squareRoot * 0.95;
  let endZone = squareRoot * 1.37;

  startZone = Math.round(startZone * 100) / 100;
  endZone = Math.round(endZone * 100) / 100;

  return [startZone, endZone];
}

console.log(goldilocksZone(0.5));

/*
my comments before solving/algorithmic attempt

find luminosity -> mass to the power of 3.5
find square root of luminosity
find start zone -> multiply sq. root value by 0.95
find end zone -> multiply sq. root value by 1.37
round off both by 2 decimal points
return both in an array
*/
