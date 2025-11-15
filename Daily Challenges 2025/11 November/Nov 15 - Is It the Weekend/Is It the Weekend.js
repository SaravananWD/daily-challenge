/*
Challenge #60

Date: November 14, 2025
Name: Is It the Weekend?
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-14
*/

function daysUntilWeekend(dateString) {
  const dayIndex = new Date(dateString + "T00:00:00Z").getUTCDay();
  const daysUntilSaturday = 6 - dayIndex;

  if (dayIndex === 0 || dayIndex === 6) {
    return "It's the weekend!";
  }

  return daysUntilSaturday === 1
    ? `1 day until the weekend.`
    : `${daysUntilSaturday} days until the weekend.`;
}

console.log(daysUntilWeekend("2025-11-14"));
