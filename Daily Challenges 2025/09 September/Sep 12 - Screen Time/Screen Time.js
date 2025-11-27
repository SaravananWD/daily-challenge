/*
Challenge #78

Date: September 12, 2025
Name: Screen Time
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-12
*/

function tooMuchScreenTime(hours) {
  // daily limit
  const maxHour = Math.max(...hours);
  if (maxHour >= 10) return true;

  // 3 days average limit
  for (let i = 1; i < 6; i++) {
    const avg3 = getAverage(...hours.slice(i - 1, i + 2));
    if (avg3 >= 8) return true;
  }

  // 7 days average limit
  const avg7 = getAverage(...hours);
  if (avg7 >= 6) return true;

  return false;
}

function getAverage(...rest) {
  return [...rest].reduce((sum, num) => num + sum, 0) / [...rest].length;
}

console.log(tooMuchScreenTime([1, 2, 3, 11, 1, 3, 4]));
