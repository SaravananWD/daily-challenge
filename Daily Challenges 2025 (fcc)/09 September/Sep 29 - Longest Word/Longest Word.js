function getLongestWord(sentence) {
  return sentence
    .replaceAll(".", "")
    .split(" ")
    .reduce((acc, word) => {
      if (word.length > acc.length) {
        acc = word;
      }
      return acc;
    }, "");
}

console.log(getLongestWord("Coding challenges are fun and educational."));
