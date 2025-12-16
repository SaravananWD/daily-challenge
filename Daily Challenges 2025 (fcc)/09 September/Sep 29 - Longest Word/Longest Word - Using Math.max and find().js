function getLongestWord(sentence) {
  const words = sentence.replace(/[.,]/g, "").split(/\s+/);
  if (words.length === 0) return "";

  const maxLength = Math.max(...words.map((word) => word.length));
  return words.find((word) => word.length === maxLength);
}
