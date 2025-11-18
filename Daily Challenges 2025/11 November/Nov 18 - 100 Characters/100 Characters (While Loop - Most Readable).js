function oneHundred(chars) {
  let result = "";

  while (result.length < 100) {
    result += chars;
  }

  return result.slice(0, 100);
}
