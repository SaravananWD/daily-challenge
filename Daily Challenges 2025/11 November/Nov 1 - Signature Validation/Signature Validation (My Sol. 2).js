function verify(message, key, signature) {
  const getCharScore = (char) => {
    if (/[^a-zA-Z]/.test(char)) return 0;
    const reductionVal = char === char.toLowerCase() ? 96 : 38;
    return char.charCodeAt(0) - reductionVal;
  };

  const getScore = (str) => {
    let score = 0;
    for (const char of str) {
      score += getCharScore(char);
    }
    return score;
  };

  return getScore(message) + getScore(key) === signature;
}
console.log(verify("foo", "bar", 57));
