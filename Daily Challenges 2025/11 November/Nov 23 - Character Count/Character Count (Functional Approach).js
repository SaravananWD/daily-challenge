function countCharacters(sentence) {
  const countMap = sentence
    .toLowerCase()
    .split("")
    .filter((char) => char >= "a" && char <= "z")
    .reduce((acc, char) => {
      acc[char] = (acc[char] || 0) + 1;
      return acc;
    }, {});

  return Object.entries(countMap)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([letter, count]) => `${letter} ${count}`);
}
