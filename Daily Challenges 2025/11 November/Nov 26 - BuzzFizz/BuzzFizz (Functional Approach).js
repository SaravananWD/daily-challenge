function isFizzBuzz(sequence) {
  if (!Array.isArray(sequence)) return false;

  return sequence.every((value, index) => {
    const number = index + 1;

    if (number % 15 === 0) return value === "FizzBuzz";
    if (number % 3 === 0) return value === "Fizz";
    if (number % 5 === 0) return value === "Buzz";

    return value === number;
  });
}
