function count(str) {
  let vowels = 0;
  let consonants = 0;

  for (const char of str) {
    const code = char.toLowerCase().charCodeAt(0);
    if (code >= 97 && code <= 122) {
      // a-z
      if (char.toLowerCase().match(/[aeiou]/)) {
        vowels++;
      } else {
        consonants++;
      }
    }
  }

  return [vowels, consonants];
}
