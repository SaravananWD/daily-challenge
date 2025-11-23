function countCharacters(sentence) {
  const countMap = {};

  for (const char of sentence.toLowerCase()) {
    if (char >= "a" && char <= "z") {
      countMap[char] = (countMap[char] || 0) + 1;
    }
  }

  // Direct transformation to sorted array
  return Object.keys(countMap)
    .sort()
    .map((letter) => `${letter} ${countMap[letter]}`);
}
