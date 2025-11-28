function compare(word, guess) {
  if (word.length !== guess.length) return null;

  const len = word.length;
  const result = new Array(len).fill(0);
  const available = {};

  // Count available letters (not used in exact matches)
  for (let i = 0; i < len; i++) {
    if (word[i] !== guess[i]) {
      available[word[i]] = (available[word[i]] || 0) + 1;
    }
  }

  // First pass: exact matches
  for (let i = 0; i < len; i++) {
    if (word[i] === guess[i]) {
      result[i] = 2;
    }
  }

  // Second pass: partial matches
  for (let i = 0; i < len; i++) {
    if (result[i] === 0 && available[guess[i]] > 0) {
      result[i] = 1;
      available[guess[i]]--;
    }
  }

  return result.join("");
}
