const longestWord = (sentence) =>
  sentence
    .trim()
    .split(/\s+/)
    .reduce((a, b) =>
      b.replace(/[^a-z]/gi, "").length > a.replace(/[^a-z]/gi, "").length
        ? b
        : a
    );
