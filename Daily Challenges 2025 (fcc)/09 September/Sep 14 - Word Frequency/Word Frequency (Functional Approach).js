function getWords(paragraph) {
  if (typeof paragraph !== "string") return [];

  const words = paragraph.match(/[a-zA-Z0-9]+(?:'[a-zA-Z0-9]+)*/g) || [];

  const wordCount = words.reduce((count, word) => {
    const lowerWord = word.toLowerCase();
    count[lowerWord] = (count[lowerWord] || 0) + 1;
    return count;
  }, {});

  return Object.entries(wordCount)
    .sort(
      ([wordA, countA], [wordB, countB]) =>
        countB - countA || wordA.localeCompare(wordB)
    )
    .slice(0, 3)
    .map(([word]) => word);
}
