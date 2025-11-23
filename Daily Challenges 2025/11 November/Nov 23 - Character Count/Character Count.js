/*
Challenge #70

Date: November 23, 2025
Name: Character Count
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-23
*/

function countCharacters(sentence) {
  const letters = {};

  for (let l of sentence.toLowerCase()) {
    if (/[a-z]/i.test(l)) {
      letters[l] = (letters[l] || 0) + 1;
    }
  }

  const sortedL = Object.entries(letters)
    .sort((a, b) => {
      return a[0].localeCompare(b[0]);
    })
    .reduce((acc, [letter, count]) => {
      return [...acc, `${letter} ${count}`];
    }, []);

  return sortedL;
}

console.log(countCharacters("hello world"));
