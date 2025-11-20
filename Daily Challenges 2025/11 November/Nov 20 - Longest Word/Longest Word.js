/*
Challenge #67

Date: November 20, 2025
Name: Longest Word
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-20
*/

function longestWord(sentence) {
  return sentence
    .trim()
    .split(" ")
    .reduce((word, str) => {
      const cleanStr = str.replace(/[^a-zA-Z]/g, "");
      if (cleanStr.length > word.length) {
        return cleanStr;
      }
      return word;
    }, "");
}

console.log(longestWord("The quick red fox"));
