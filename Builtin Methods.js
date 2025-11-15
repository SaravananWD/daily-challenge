const squareRoot = Math.sqrt(9); // 3

const isInteger = Number.isInteger(3.4); // false

const reverseArrayItems = [1, 2, 3].reverse(); // [3, 2, 1]
// reverse() will not work on strings.
// So, split string into array, reverse, then join.

const absoluteNumber = Math.abs(-4); // 4

const replaceString = "ABC".replace("AB", "12"); // "12C"

const isInclude = [1, 2, 3, 4].includes(2); // true

const roundDown = Math.floor(2.6); // 2
// returns the largest integer less than or equal to a given number

const fixDecimals = (23.247).toFixed(2); // 23.25
// will add zeroes when no decimals and rounds up last digit

const trimSpaces = " hello world  ".trim(); // "hello world"

const upperCase = "a".toUpperCase(); // "A"

const charCode = "A".charCodeAt(0); // 65

const sort = ["C", "A", "B"].sort((a, b) =>
  a.localeCompare(b, undefined, { sensitivity: "base" })
); // ['A', 'B', 'C']

const dayIndex = new Date("2025-11-14").getUTCDay();
// 5 (Because 14 falls on Friday which is 5th weekday)

const maxNum = Math.max(3, 5); // 5

const minNum = Math.min(3, 5); // 3
