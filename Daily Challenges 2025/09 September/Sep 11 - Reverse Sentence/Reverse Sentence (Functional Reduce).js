function reverseSentence(sentence) {
  return sentence
    .trim()
    .split(/\s+/)
    .reduce((reversed, word) => [word, ...reversed], [])
    .join(" ");
}
