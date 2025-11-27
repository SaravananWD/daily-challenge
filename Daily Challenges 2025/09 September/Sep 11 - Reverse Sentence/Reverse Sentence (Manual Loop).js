function reverseSentence(sentence) {
  const words = sentence.trim().split(/\s+/);
  let result = "";

  for (let i = words.length - 1; i >= 0; i--) {
    result += words[i] + (i > 0 ? " " : "");
  }

  return result;
}
