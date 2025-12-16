/*
Challenge #45

Date: November 8, 2025
Name: Character Limit
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-08
*/

function canPost(message) {
  const length = message.length;

  if (length <= 40) {
    return "short post";
  } else if (length <= 80) return "long post";

  return "invalid post";
}

console.log(canPost("Hello world"));
