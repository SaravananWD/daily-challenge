function isPangram(sentence, letters) {
  const requiredSet = new Set(letters.toLowerCase());
  const usedSet = new Set(sentence.toLowerCase().replace(/[^a-z]/g, ""));

  // Check sets have same size (no extra letters)
  if (requiredSet.size !== usedSet.size) return false;

  // Check all required letters are present
  for (const letter of requiredSet) {
    if (!usedSet.has(letter)) return false;
  }

  return true;
}
