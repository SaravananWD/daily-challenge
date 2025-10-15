/*
Challenge details

Date: October 9, 2025
Name: Space Week Day 6: Moon Phase
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-09
*/

function moonPhase(dateString) {
  // conditions & initialization
  const CONDITIONS = (diff) => ({
    New: diff >= 1 && diff <= 7,
    Waxing: diff >= 8 && diff <= 14,
    Full: diff >= 15 && diff <= 21,
    Waning: diff >= 22 && diff <= 28,
  });
  const REF_DATE = new Date("2000-01-06");
  const PHASE_DATE = new Date(dateString);

  // find time & days difference
  const timeDifference = Math.abs(PHASE_DATE.getTime() - REF_DATE.getTime());
  let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)) + 1;

  // keep difference below 28
  while (daysDifference > 28) {
    daysDifference -= 28;
  }

  // test conditions and return result
  const testConditions = CONDITIONS(daysDifference);
  const moonPhase = Object.keys(testConditions).find(
    (key) => testConditions[key] === true
  );

  return moonPhase;
}

console.log(moonPhase("2000-01-13"));

/*
Store reference day as REF_DATE 
Subtract given Date with REF_DATE to find number of days passed - DAYS_PASSED

Check if the DAYS_PASSED fall between 1-28 to return corresponding phase of the moon.

If gerater than 28 subtract by 28 until the value reaches 28 or below.

*/
