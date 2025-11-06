/*
Challenge #43

Date: November 6, 2025
Name: Weekday Finder
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-06
*/

function getWeekday(dateString) {
  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(dateString);
  return DAYS[date.getDay()];
}

console.log(getWeekday("2025-11-06"));
