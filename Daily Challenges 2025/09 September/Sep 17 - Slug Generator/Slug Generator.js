/*
Challenge #56

Challenge Date: September 17, 2025
Name: Slug Generator
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-17
Completed Date: November 11, 2025
*/

function generateSlug(str) {
  const cleanString = str
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .replace(/\s+/g, "%20");

  return cleanString;
}
console.log(generateSlug("hello  world"));
