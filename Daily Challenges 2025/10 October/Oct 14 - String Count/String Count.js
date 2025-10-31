/*
Challenge #20

Date: October 14, 2025
Name: String Count
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-10-14
*/

function count(text, pattern) {
  let count = 0;

  let i = 0;
  while (text[pattern.length - 1 + i]) {
    const textCrop = text.slice(i, pattern.length + i);
    if (textCrop === pattern) {
      count++;
    }
    i++;
  }

  return count;
}

console.log(count("abcdefg", "def"));
