function fizzBuzz(n) {
  const rules = [
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" },
  ];

  return Array.from({ length: n }, (_, i) => {
    const num = i + 1;
    const output = rules
      .filter((rule) => num % rule.divisor === 0)
      .map((rule) => rule.word)
      .join("");

    return output || num;
  });
}
