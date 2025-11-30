function detectAI(text) {
  // Count dashes
  const dashCount = (text.match(/-/g) || []).length;
  if (dashCount >= 2) return "AI";

  // Count parenthesis pairs
  const parensCount = (text.match(/\([^)]*\)/g) || []).length;
  if (parensCount >= 2) return "AI";

  // Count long words
  const words = text.match(/\b[A-Za-z]+\b/g) || [];
  const longWordsCount = words.filter((word) => word.length >= 7).length;
  if (longWordsCount >= 3) return "AI";

  return "Human";
}
