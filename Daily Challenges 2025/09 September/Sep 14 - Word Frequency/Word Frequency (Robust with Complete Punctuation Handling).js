function getWords(paragraph) {
  if (typeof paragraph !== "string") return [];

  // Better regex: matches words with letters, numbers, and internal apostrophes
  const words = paragraph.match(/[a-zA-Z0-9]+(?:'[a-zA-Z0-9]+)*/g);
  if (!words || words.length === 0) return [];

  const wordCount = {};

  for (const word of words) {
    const lowerWord = word.toLowerCase();
    wordCount[lowerWord] = (wordCount[lowerWord] || 0) + 1;
  }

  const sortedWords = Object.entries(wordCount).sort(
    (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
  ); // Tie-breaker: alphabetical

  // Return top 3, or fewer if not enough words
  return sortedWords.slice(0, 3).map((entry) => entry[0]);
}
