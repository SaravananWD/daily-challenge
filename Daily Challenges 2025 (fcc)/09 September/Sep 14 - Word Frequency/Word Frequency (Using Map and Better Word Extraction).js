function getWords(paragraph) {
  if (typeof paragraph !== "string") return [];

  // Split by non-word characters (excluding apostrophes within words)
  const words = paragraph
    .toLowerCase()
    .split(/[^\w']+/)
    .filter(Boolean);

  const frequency = new Map();

  for (const word of words) {
    // Clean word: remove leading/trailing apostrophes but keep internal ones
    const cleanWord = word.replace(/^'+|'+$/g, "");
    if (cleanWord) {
      frequency.set(cleanWord, (frequency.get(cleanWord) || 0) + 1);
    }
  }

  return Array.from(frequency.entries())
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 3)
    .map(([word]) => word);
}
