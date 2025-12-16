/*
Challenge #50

Challenge Date: September 23, 2025
Name: String Mirror
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-23
Completed Date: November 11, 2025
*/

function isMirror(str1, str2) {
  const removeSymbols = (s) => s.replace(/[^A-Za-z]/g, "");
  return (
    removeSymbols(str1) === removeSymbols(str2).split("").reverse().join("")
  );
}

console.log(isMirror("Hello World", "dlroW-olleH"));
