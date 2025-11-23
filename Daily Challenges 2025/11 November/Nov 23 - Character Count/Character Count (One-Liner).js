const countCharacters = (sentence) =>
  Object.entries(
    [...sentence.toLowerCase()].reduce((acc, char) => {
      if (char >= "a" && char <= "z") acc[char] = (acc[char] || 0) + 1;
      return acc;
    }, {})
  )
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([l, c]) => `${l} ${c}`);
