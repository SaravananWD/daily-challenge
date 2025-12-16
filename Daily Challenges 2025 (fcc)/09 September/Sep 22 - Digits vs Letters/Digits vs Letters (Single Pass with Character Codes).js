function digitsOrLetters(str) {
  let letters = 0;
  let digits = 0;

  for (const char of str) {
    const code = char.charCodeAt(0);
    if (code >= 48 && code <= 57) {
      // 0-9
      digits++;
    } else if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      // A-Za-z
      letters++;
    }
  }

  if (digits > letters) return "digits";
  if (letters > digits) return "letters";
  return "tie";
}
