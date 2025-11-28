function repeatVowels(str) {
  const VOWELS = new Set(["a", "e", "i", "o", "u"]);

  let vowelCount = 0;

  return str
    .split("")
    .map((char) => {
      const lowerChar = char.toLowerCase();

      if (VOWELS.has(lowerChar)) {
        vowelCount++;
        return char + lowerChar.repeat(vowelCount - 1);
      }

      return char;
    })
    .join("");
}
