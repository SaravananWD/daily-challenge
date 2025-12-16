/*
Challenge #83

Date: September 8, 2025
Name: Acronym Builder
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-08
*/

function buildAcronym(str) {
  const exclusion = new Set(["a", "for", "an", "and", "by", "of"]);

  return str
    .split(/\s+/)
    .map((word) => {
      if (!exclusion.has(word)) {
        return word[0].toUpperCase();
      }
      return "";
    })
    .join("");
}
console.log(buildAcronym("National Aeronautics and Space Administration"));
