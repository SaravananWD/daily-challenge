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
