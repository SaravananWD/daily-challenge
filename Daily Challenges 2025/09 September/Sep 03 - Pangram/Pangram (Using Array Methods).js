function isPangram(sentence, letters) {
  const required = letters.toLowerCase().split("");
  const used = sentence
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("");

  const usedSet = new Set(used);
  const requiredSet = new Set(required);

  // Check all required letters are used and no extra letters
  return (
    required.every((letter) => usedSet.has(letter)) &&
    used.every((letter) => requiredSet.has(letter))
  );
}
