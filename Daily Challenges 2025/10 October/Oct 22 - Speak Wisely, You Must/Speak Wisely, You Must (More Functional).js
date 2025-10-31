function wiseSpeak(sentence) {
  const PIVOT_WORDS = ["have", "must", "are", "will", "can"];
  const punctuation = sentence.slice(-1);
  const words = sentence.slice(0, -1).split(" ");

  const pivotIndex = words.findIndex((word) =>
    PIVOT_WORDS.includes(word.toLowerCase())
  );

  if (pivotIndex === -1) {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  }

  const firstHalf = words.slice(pivotIndex + 1);
  const secondHalf = words.slice(0, pivotIndex + 1);

  let result = firstHalf.join(" ");
  if (secondHalf.length > 0) {
    result += ", " + secondHalf.join(" ").toLowerCase();
  }

  return result.charAt(0).toUpperCase() + result.slice(1) + punctuation;
}
