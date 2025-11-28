/*
Challenge #88

Date: November 28, 2025
Name: Word Guesser
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-11-28
*/

function compare(word, guess) {
  if (word.length !== guess.length) return;

  // create object with scores for exact matches
  const record = {};
  word.split("").forEach((value, index) => {
    const isMatch = value === guess[index];
    record[index] = { tested: isMatch, score: isMatch ? 2 : 0 };
  });

  // assign scores for partial match
  guess.split("").forEach((guessChar, guessIndex) => {
    for (let j = 0; j < word.length; j++) {
      const wordChar = word[j];
      const isTested = record[j].tested;

      if (wordChar === guessChar && !isTested) {
        record[guessIndex].score = 1;
        record[j].tested = true;
        break;
      }
    }
  });

  // fetching scores and return
  return guess
    .split("")
    .map((_, i) => record[i].score)
    .join("");
}

console.log(compare("APPLE", "POPPA"));
