/*
Challenge #81

Date: September 10, 2025
Name: Array Diff
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-10
*/

function arrayDiff(arr1, arr2) {
  return [...arr1, ...arr2]
    .filter((v) => (arr1.includes(v) ? !arr2.includes(v) : true))
    .sort();
}

console.log(
  arrayDiff(["one", "two", "three", "four", "six"], ["one", "three", "eight"])
);
