function isFizzBuzz(sequence) {
  if (!Array.isArray(sequence)) return false;

  for (let i = 0; i < sequence.length; i++) {
    const num = i + 1;
    const actual = sequence[i];

    // Generate expected value on the fly
    if (num % 15 === 0) {
      if (actual !== "FizzBuzz") return false;
    } else if (num % 3 === 0) {
      if (actual !== "Fizz") return false;
    } else if (num % 5 === 0) {
      if (actual !== "Buzz") return false;
    } else {
      if (actual !== num) return false;
    }
  }

  return true;
}
