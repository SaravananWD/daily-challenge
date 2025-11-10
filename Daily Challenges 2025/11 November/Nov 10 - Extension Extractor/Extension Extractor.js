/*
Challenge #47

Date: November 10, 2025
Name: Extension Extractor
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-10
*/

function getExtension(filename) {
  const lastIndex = filename.lastIndexOf(".");
  return lastIndex >= 0 && filename[lastIndex + 1] !== undefined
    ? filename.slice(lastIndex + 1)
    : "none";
}
console.log(getExtension("final.draft."));
