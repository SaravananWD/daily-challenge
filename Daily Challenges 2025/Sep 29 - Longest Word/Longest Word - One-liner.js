const getLongestWord = (sentence) =>
  sentence
    .replace(/[.,]/g, "")
    .split(/\s+/)
    .reduce((a, b) => (a.length >= b.length ? a : b), "");
