function verify(message, key, signature) {
  const getCharValue = (char) => {
    const code = char.charCodeAt(0);
    if (code >= 97 && code <= 122) return code - 96;
    if (code >= 65 && code <= 90) return code - 38;
    return 0;
  };

  const sumString = (str) =>
    [...str].reduce((sum, char) => sum + getCharValue(char), 0);

  return sumString(message) + sumString(key) === signature;
}
