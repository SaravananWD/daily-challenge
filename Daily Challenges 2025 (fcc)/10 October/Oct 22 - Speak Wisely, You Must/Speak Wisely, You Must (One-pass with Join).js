function wiseSpeak(sentence) {
  const PIVOT_WORDS = ["have", "must", "are", "will", "can"];
  const punctuation = sentence[sentence.length - 1];
  const words = sentence.slice(0, -1).split(" ");

  const pivotIndex = words.findIndex((word) =>
    PIVOT_WORDS.includes(word.toLowerCase())
  );

  if (pivotIndex === -1) {
    return sentence[0].toUpperCase() + sentence.slice(1, -1) + punctuation;
  }

  const firstPart = words.slice(pivotIndex + 1).join(" ");
  const secondPart = words
    .slice(0, pivotIndex + 1)
    .join(" ")
    .toLowerCase();

  return `${
    firstPart.charAt(0).toUpperCase() + firstPart.slice(1)
  }, ${secondPart}${punctuation}`;
}
