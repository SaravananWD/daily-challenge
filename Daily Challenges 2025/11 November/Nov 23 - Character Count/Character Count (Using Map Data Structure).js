function countCharacters(sentence) {
  const countMap = new Map();

  for (const char of sentence.toLowerCase()) {
    if (char >= "a" && char <= "z") {
      countMap.set(char, (countMap.get(char) || 0) + 1);
    }
  }

  // Maps maintain insertion order, but we still need to sort
  return Array.from(countMap)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([letter, count]) => `${letter} ${count}`);
}
