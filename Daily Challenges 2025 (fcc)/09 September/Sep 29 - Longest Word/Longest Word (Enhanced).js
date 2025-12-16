function getLongestWord(sentence) {
  if (!sentence || sentence.trim() === "") return "";

  return sentence
    .replace(/[.,]/g, "") // Remove punctuation
    .split(/\s+/) // Split on one or more spaces
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ""
    );
}
