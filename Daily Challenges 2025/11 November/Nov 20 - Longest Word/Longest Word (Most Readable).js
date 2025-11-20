function longestWord(sentence) {
  const words = sentence.trim().split(/\s+/);

  let longestWord = "";
  let longestCleanLength = 0;

  for (const word of words) {
    const cleanWord = word.replace(/[^a-zA-Z]/g, "");
    const cleanLength = cleanWord.length;

    if (cleanLength > longestCleanLength) {
      longestWord = word;
      longestCleanLength = cleanLength;
    }
  }

  return longestWord;
}
