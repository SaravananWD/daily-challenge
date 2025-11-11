function digitsOrLetters(str) {
  const letters = (str.match(/[a-zA-Z]/g) || []).length;
  const digits = (str.match(/[0-9]/g) || []).length;

  if (digits > letters) return "digits";
  if (letters > digits) return "letters";
  return "tie";
}
