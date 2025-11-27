/*
Challenge #79

Date: November 27, 2025
Name: What's My Age Again?
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-27
*/

function calculateAge(birthday, target = "2025-11-27") {
  const bornDate = new Date(birthday);
  const targetDate = new Date(target);

  const age = targetDate.getFullYear() - bornDate.getFullYear();

  const hasBirthdayOccurred =
    targetDate.getMonth() > bornDate.getMonth() ||
    (targetDate.getMonth() === bornDate.getMonth() &&
      targetDate.getDate() >= bornDate.getDate());

  return hasBirthdayOccurred ? age : age - 1;
}

console.log(calculateAge("2000-11-20"));
