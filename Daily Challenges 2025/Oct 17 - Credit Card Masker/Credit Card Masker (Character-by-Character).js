function mask(card) {
  let result = "";
  let digitCount = 0;

  for (let i = 0; i < card.length; i++) {
    const char = card[i];
    if (/\d/.test(char)) {
      digitCount++;
      // Only show last 4 digits, mask others
      result += digitCount > 12 ? char : "*";
    } else {
      result += char; // Preserve separators
    }
  }

  return result;
}
console.log(mask("4012-8888-8888-1881"));
