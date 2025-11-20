function longestWord(sentence) {
  const words = sentence.trim().split(/\s+/);

  return words
    .map((word) => ({
      original: word,
      clean: word.replace(/[^a-zA-Z]/g, ""),
      length: word.replace(/[^a-zA-Z]/g, "").length,
    }))
    .reduce((longest, current) =>
      current.length > longest.length ? current : longest
    ).original;
}
