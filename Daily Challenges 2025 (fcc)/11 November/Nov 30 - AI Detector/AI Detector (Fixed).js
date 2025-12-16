function detectAI(text) {
  const words = text.split(/\s+/);
  let count = { dash: 0, parens: 0, longWords: 0 };

  for (const word of words) {
    let isAI = false;
    const cleanWord = word.replace(/[^A-Za-z]/g, "");
    const wordLen = cleanWord.length;

    // Check for dashes (anywhere in the word)
    if (word.includes("-")) {
      count.dash++;
      if (count.dash >= 2) return "AI";
    }

    // Check for parentheses (pairs)
    const openParens = (word.match(/\(/g) || []).length;
    const closeParens = (word.match(/\)/g) || []).length;
    if (openParens > 0 || closeParens > 0) {
      count.parens += Math.min(openParens, closeParens); // Count pairs
      if (count.parens >= 2) return "AI";
    }

    // Check long words
    if (wordLen >= 7) {
      count.longWords++;
      if (count.longWords >= 3) return "AI";
    }
  }

  return "Human";
}
