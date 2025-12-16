function wiseSpeak(sentence) {
  const PIVOT_WORDS = ["have", "must", "are", "will", "can"];
  const punctuation = sentence.slice(-1);
  const words = sentence.slice(0, -1).split(" ");

  let pivotIndex = -1;

  // Find first occurrence of any pivot word
  for (let i = 0; i < words.length; i++) {
    if (PIVOT_WORDS.includes(words[i].toLowerCase())) {
      pivotIndex = i;
      break;
    }
  }

  // If no pivot word found, return original sentence
  if (pivotIndex === -1) {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  }

  const firstHalf = words.slice(pivotIndex + 1);
  const secondHalf = words.slice(0, pivotIndex + 1);

  const result = [firstHalf.join(" "), secondHalf.join(" ").toLowerCase()]
    .filter((part) => part.length > 0)
    .join(", ");

  // Capitalize first letter and add punctuation
  return result.charAt(0).toUpperCase() + result.slice(1) + punctuation;
}
