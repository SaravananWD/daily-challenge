function digitsOrLetters(str) {
  const cleanString = str.replace(/[^A-Za-z0-9]/g, "");

  let letters = 0;
  let digits = 0;

  for (const char of cleanString) {
    if (/[a-zA-Z]/.test(char)) {
      letters++;
    } else {
      digits++;
    }
  }

  if (digits > letters) return "digits";
  if (letters > digits) return "letters";
  return "tie";
}
