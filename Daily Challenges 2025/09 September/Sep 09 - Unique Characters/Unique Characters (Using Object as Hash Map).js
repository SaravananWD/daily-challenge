function allUnique(str) {
  const charMap = {};

  for (const char of str) {
    if (charMap[char]) {
      return false;
    }
    charMap[char] = true;
  }

  return true;
}
