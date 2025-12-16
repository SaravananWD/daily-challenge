function compare(word, guess) {
  if (word.length !== guess.length) return null;

  const len = word.length;
  const result = new Array(len).fill(0);
  const used = new Array(len).fill(false);

  // First pass: exact matches (score 2)
  for (let i = 0; i < len; i++) {
    if (word[i] === guess[i]) {
      result[i] = 2;
      used[i] = true; // Mark this position in secret word as used
    }
  }

  // Second pass: partial matches (score 1)
  for (let i = 0; i < len; i++) {
    if (result[i] !== 0) continue; // Skip already scored positions

    for (let j = 0; j < len; j++) {
      // Find unused letter in secret word that matches guess letter
      if (!used[j] && word[j] === guess[i] && word[j] !== guess[j]) {
        result[i] = 1;
        used[j] = true;
        break;
      }
    }
  }

  return result.join("");
}
