/*
Challenge #71

Date: November 24, 2025
Name: Message Validator
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-24
*/

function isValidMessage(message, validator) {
  const words = message.split(/\s+/);
  if (words.length !== validator.length) return false;

  for (let i = 0; i < words.length; i++) {
    const l1 = words[i][0].toLowerCase();
    const l2 = validator[i].toLowerCase();
    if (l1 !== l2) return false;
  }
  return true;
}

console.log(isValidMessage("Coding challenge are boring.", "cca"));
