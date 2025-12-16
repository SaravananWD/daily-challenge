function allUnique(str) {
  let checker = 0;

  for (const char of str) {
    const val = char.charCodeAt(0) - "a".charCodeAt(0);
    if ((checker & (1 << val)) > 0) {
      return false;
    }
    checker |= 1 << val;
  }

  return true;
}
