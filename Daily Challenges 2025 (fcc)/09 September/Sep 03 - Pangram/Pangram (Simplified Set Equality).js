function isPangram(sentence, letters) {
  const requiredLetters = new Set(letters.toLowerCase());
  const usedLetters = new Set(sentence.toLowerCase().replace(/[^a-z]/g, ""));

  // Check if sets are exactly equal
  return (
    requiredLetters.size === usedLetters.size &&
    [...requiredLetters].every((letter) => usedLetters.has(letter))
  );
}
