/*
Challenge #74

Date: September 16, 2025
Name: Sentence Capitalizer
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-16
*/

function capitalize(paragraph) {
  return paragraph
    .trim()
    .replace(/(^\s*[a-z])|((?<=(?:[.!?]+))\s*[a-z])/g, (match) =>
      match.toUpperCase()
    );
}

console.log(
  capitalize(
    "i did today's coding challenge... it was fun!!crazy!!!strange???unconventional...sentences."
  )
);
