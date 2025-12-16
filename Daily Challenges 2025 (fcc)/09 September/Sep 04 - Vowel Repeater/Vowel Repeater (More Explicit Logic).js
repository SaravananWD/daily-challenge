function repeatVowels(str) {
  const VOWELS = new Set(["a", "e", "i", "o", "u"]);

  let result = "";
  let vowelPosition = 0;

  for (const char of str) {
    const isVowel = VOWELS.has(char.toLowerCase());

    if (isVowel) {
      vowelPosition++;
      // The vowel appears 'vowelPosition' times
      // First occurrence: original case, subsequent: lowercase
      result += char; // First occurrence with original case
      result += char.toLowerCase().repeat(vowelPosition - 1); // Additional occurrences
    } else {
      result += char;
    }
  }

  return result;
}
