function countWords(sentence) {
  if (!sentence || typeof sentence !== "string") return 0;

  return sentence
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;
}
