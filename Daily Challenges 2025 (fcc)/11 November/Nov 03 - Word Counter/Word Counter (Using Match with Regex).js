function countWords(sentence) {
  if (!sentence || typeof sentence !== "string") return 0;

  const words = sentence.match(/\S+/g);
  return words ? words.length : 0;
}
