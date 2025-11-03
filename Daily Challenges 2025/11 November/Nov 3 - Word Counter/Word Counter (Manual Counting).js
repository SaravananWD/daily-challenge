function countWords(sentence) {
  if (!sentence || typeof sentence !== "string") return 0;

  let count = 0;
  let inWord = false;

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " " && !inWord) {
      count++;
      inWord = true;
    } else if (sentence[i] === " ") {
      inWord = false;
    }
  }

  return count;
}
