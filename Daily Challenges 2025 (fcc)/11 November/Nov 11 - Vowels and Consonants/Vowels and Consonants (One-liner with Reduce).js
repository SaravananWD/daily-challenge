const count = (str) =>
  [...str.toLowerCase()].reduce(
    ([v, c], char) =>
      /[aeiou]/.test(char)
        ? [v + 1, c]
        : /[a-z]/.test(char)
        ? [v, c + 1]
        : [v, c],
    [0, 0]
  );
