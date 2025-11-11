function count(str) {
  const VOWELS = new Set(["a", "e", "i", "o", "u"]);
  const letters = str.replace(/[^a-z]/gi, "").toLowerCase();

  let vowels = 0;
  let consonants = 0;

  for (const char of letters) {
    VOWELS.has(char) ? vowels++ : consonants++;
  }

  return [vowels, consonants];
}
