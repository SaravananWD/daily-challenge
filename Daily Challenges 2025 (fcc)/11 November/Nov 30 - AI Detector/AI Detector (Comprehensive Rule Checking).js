function detectAI(text) {
  let dashCount = 0;
  let parensCount = 0;
  let longWordsCount = 0;

  // Count dashes (anywhere in text)
  dashCount = (text.match(/-/g) || []).length;

  // Count sets of parentheses (balanced pairs)
  const parensMatches = text.match(/\([^)]*\)/g) || [];
  parensCount = parensMatches.length;

  // Count long words (7+ letters, ignoring punctuation)
  const words = text.split(/\s+/);
  for (const word of words) {
    // Remove non-letters and count
    const cleanWord = word.replace(/[^A-Za-z]/g, "");
    if (cleanWord.length >= 7) {
      longWordsCount++;
    }
  }

  // Check if any rule is met
  if (dashCount >= 2 || parensCount >= 2 || longWordsCount >= 3) {
    return "AI";
  }

  return "Human";
}
