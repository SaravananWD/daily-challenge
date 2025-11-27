/*
Challenge #76

Date: September 14, 2025
Name: Word Frequency
Link: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-14
*/

function getWords(paragraph) {
  const words = paragraph.match(/\b[a-zA-Z0-9]+\b/g);

  const wordCount = {};
  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();

    if (!wordCount[word]) {
      wordCount[word] = 1;
    } else {
      wordCount[word] += 1;
    }
  }

  const sortedWords = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);

  return sortedWords.slice(0, 3).map(([word]) => word);
}

console.log(
  getWords(
    "Coding in Python is fun because coding Python allows for coding in Python easily while coding"
  )
);
